import { Resend } from 'resend';
import { z } from 'zod';
import { SITE } from '@/lib/constants';

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

  const result = schema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: result.error.flatten() }, { status: 400 });
  }

  const { name, phone, email, source } = result.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json({ success: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'onboarding@resend.dev',
      to: process.env.RESEND_TO ?? SITE.email,
      subject: `[Lexakind Lead] ${name} — ${phone}`,
      html: `
        <h2>New Lead Captured</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        <p><strong>Source:</strong> ${source ?? 'website'}</p>
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
