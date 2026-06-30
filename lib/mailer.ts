import { Resend } from 'resend';
import { SITE } from '@/lib/constants';

/** Escape user-supplied text before embedding it in an email's HTML body. */
export function escapeHtml(input: string): string {
  return input.replace(
    /[&<>"']/g,
    (c) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[c]!,
  );
}

export function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

export const MAIL_FROM = process.env.RESEND_FROM ?? 'onboarding@resend.dev';
export const MAIL_TO = process.env.RESEND_TO ?? SITE.email;

/** Branded confirmation sent to the person who submitted an enquiry. */
export async function sendAutoReply(resend: Resend, to: string, name: string) {
  await resend.emails.send({
    from: MAIL_FROM,
    to,
    subject: `We've received your enquiry — ${SITE.name}`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:480px">
        <h2 style="color:#161618">Thank you, ${escapeHtml(name.split(' ')[0])}.</h2>
        <p style="color:#444;line-height:1.6">
          We've received your request and a verified advocate from the
          ${SITE.name} team will reach out within 24 hours.
        </p>
        <p style="color:#444;line-height:1.6">
          Need to speak with us sooner? Call
          <a href="tel:${SITE.phone}" style="color:#ff9100">${SITE.phoneDisplay}</a>.
        </p>
        <p style="color:#888;font-size:12px;margin-top:24px">
          ${SITE.name} · ${SITE.address.city}, ${SITE.address.region}
        </p>
      </div>
    `,
  });
}
