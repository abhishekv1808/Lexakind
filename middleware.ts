import { NextResponse, type NextRequest } from 'next/server';

/**
 * Redirect mixed-case page URLs to their canonical lowercase form
 * (e.g. /Practice-Areas → /practice-areas) instead of 404ing —
 * protects against miscased inbound links and duplicate-URL signals.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Page routes only — never touch _next internals, API routes, or static
  // files (anything with a dot, e.g. /images/team/Lexakind-founder.jpeg).
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
