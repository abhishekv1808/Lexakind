/**
 * Lightweight honeypot spam protection.
 *
 * Forms render a hidden `website` field that real users never see or fill.
 * Bots that auto-fill every input will populate it — letting the API drop
 * the submission silently (returning a fake success so the bot doesn't retry).
 *
 * This is a zero-dependency first line of defence. For stronger protection,
 * layer Cloudflare Turnstile / hCaptcha on top.
 */
export const HONEYPOT_FIELD = 'website';

export function isHoneypotTripped(body: unknown): boolean {
  if (!body || typeof body !== 'object') return false;
  const v = (body as Record<string, unknown>)[HONEYPOT_FIELD];
  return typeof v === 'string' && v.trim().length > 0;
}
