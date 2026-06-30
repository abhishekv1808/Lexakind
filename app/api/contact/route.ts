import { z } from 'zod';
import { isHoneypotTripped } from '@/lib/spam';
import { getResend, escapeHtml, sendAutoReply, MAIL_FROM, MAIL_TO } from '@/lib/mailer';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  practiceArea: z.string().min(1),
  message: z.string().min(20).max(1000),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Spam bot tripped the honeypot — pretend success, send nothing.
  if (isHoneypotTripped(body)) {
    return Response.json({ success: true });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: result.error.flatten() }, { status: 400 });
  }

  const { name, email, phone, practiceArea, message } = result.data;
  const resend = getResend();

  // Email not configured yet — accept the submission so the form is usable.
  if (!resend) {
    return Response.json({ success: true, delivered: false });
  }

  try {
    await resend.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `[Lexakind Enquiry] ${practiceArea} — ${name}`,
      html: `
        <h2>New Enquiry — ${escapeHtml(practiceArea)}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Practice area:</strong> ${escapeHtml(practiceArea)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      `,
    });
    await sendAutoReply(resend, email, name);
    return Response.json({ success: true, delivered: true });
  } catch {
    return Response.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 502 },
    );
  }
}
