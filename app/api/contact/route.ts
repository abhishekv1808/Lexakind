import { Resend } from 'resend';
import { z } from 'zod';
import { SITE } from '@/lib/constants';

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

  const result = schema.safeParse(body);
  if (!result.success) {
    return Response.json(
      { error: result.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, phone, practiceArea, message } = result.data;
  const apiKey = process.env.RESEND_API_KEY;

  // Email not configured yet — accept the submission so the form is usable.
  if (!apiKey) {
    return Response.json({ success: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'onboarding@resend.dev',
      to: process.env.RESEND_TO ?? SITE.email,
      replyTo: email,
      subject: `[Lexakind Enquiry] ${practiceArea} — ${name}`,
      html: `
        <h2>New Enquiry — ${practiceArea}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Practice area:</strong> ${practiceArea}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });
    return Response.json({ success: true, delivered: true });
  } catch {
    return Response.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 502 },
    );
  }
}
