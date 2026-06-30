import { z } from 'zod';
import { isHoneypotTripped } from '@/lib/spam';
import { getResend, escapeHtml, MAIL_FROM, MAIL_TO } from '@/lib/mailer';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email().optional().or(z.literal('')),
  source: z.string().optional(),
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

  const { name, phone, email, source } = result.data;
  const resend = getResend();

  if (!resend) {
    return Response.json({ success: true, delivered: false });
  }

  try {
    await resend.emails.send({
      from: MAIL_FROM,
      to: MAIL_TO,
      ...(email ? { replyTo: email } : {}),
      subject: `[Lexakind Lead] ${name} — ${phone}`,
      html: `
        <h2>New Lead Captured</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ''}
        <p><strong>Source:</strong> ${escapeHtml(source ?? 'website')}</p>
      `,
    });
    return Response.json({ success: true, delivered: true });
  } catch {
    return Response.json(
      { error: 'Failed to submit. Please try again later.' },
      { status: 502 },
    );
  }
}
