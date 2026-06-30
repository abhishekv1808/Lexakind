import { z } from 'zod';
import { isHoneypotTripped } from '@/lib/spam';
import { getResend, escapeHtml, sendAutoReply, MAIL_FROM, MAIL_TO } from '@/lib/mailer';

const schema = z.object({
  practiceArea: z.string().min(1),
  date: z.string().min(1),
  timeSlot: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  message: z.string().max(500).optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (isHoneypotTripped(body)) {
    return Response.json({ success: true });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: result.error.flatten() }, { status: 400 });
  }

  const { practiceArea, date, timeSlot, name, email, phone, message } =
    result.data;
  const resend = getResend();

  if (!resend) {
    return Response.json({ success: true, delivered: false });
  }

  try {
    await resend.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `[Lexakind Booking] ${practiceArea} — ${name} (${date} ${timeSlot})`,
      html: `
        <h2>New Consultation Booking</h2>
        <p><strong>Practice area:</strong> ${escapeHtml(practiceArea)}</p>
        <p><strong>Preferred date:</strong> ${escapeHtml(date)}</p>
        <p><strong>Preferred time:</strong> ${escapeHtml(timeSlot)}</p>
        <hr/>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${message ? `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>` : ''}
      `,
    });
    await sendAutoReply(resend, email, name);
    return Response.json({ success: true, delivered: true });
  } catch {
    return Response.json(
      { error: 'Failed to submit your booking. Please try again later.' },
      { status: 502 },
    );
  }
}
