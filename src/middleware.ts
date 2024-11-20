import { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log(request);
};
export const config = {
  matcher: [
    "/((?!login|system-maintenance|api/auth|api/3rd|invite|_next/static|_next/fonts|_next/image|favicon.ico).*)",
  ],
};
