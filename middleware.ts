// middleware.ts
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default withAuth(
  async function middleware(request: NextRequest) { // Add 'request' parameter here
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-current-path', request.nextUrl.pathname);
    requestHeaders.set('x-current-full-url', request.nextUrl.href);

    // Kinde's middleware will handle the authentication part.
    // We just need to return a NextResponse that includes our modified headers.
    // If Kinde handles redirection, ensure your headers are still passed.
    // The 'withAuth' function will wrap this and perform its logic.
    // The returned NextResponse from your inner middleware is what gets processed further.
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  },
  {
    publicPaths: ["/", "/author", "/post"],
  }
);

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
}
