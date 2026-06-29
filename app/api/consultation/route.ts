import { Resend } from 'resend';
import { z } from 'zod';
import { SITE } from '@/lib/constants';

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

  const result = schema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: result.error.flatten() }, { status: 400 });
  }

  const { practiceArea, date, timeSlot, name, email, phone, message } =
    result.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json({ success: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'onboarding@resend.dev',
      to: process.env.RESEND_TO ?? SITE.email,
      replyTo: email,
      subject: `[Lexakind Booking] ${practiceArea} — ${name} (${date} ${timeSlot})`,
      html: `
        <h2>New Consultation Booking</h2>
        <p><strong>Practice area:</strong> ${practiceArea}</p>
        <p><strong>Preferred date:</strong> ${date}</p>
        <p><strong>Preferred time:</strong> ${timeSlot}</p>
        <hr/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${message ? `<p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>` : ''}
      `,
    });
    return Response.json({ success: true, delivered: true });
  } catch {
    return Response.json(
      { error: 'Failed to submit your booking. Please try again later.' },
      { status: 502 },
    );
  }
}
