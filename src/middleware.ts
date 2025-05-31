import { THEME_LAYOUT } from "@/constants/keys";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from 'next/headers'
import { decrypt } from "./components/lib/utils";

const protectedRoutes = ['/profile']
const publicRoutes = ['/login']

export default async function middleware(request: NextRequest) {
  const theme = request.cookies.get(THEME_LAYOUT)?.value || "";
  const userAgent =
    request.headers.get("x-amzn-user-agent") ||
    request.headers.get("user-agent") ||
    "";
  const isMobile =
    (/(Mobile)/i.test(userAgent) && !/(Ipad|Tablet)/i.test(userAgent)) || false;
  const response = NextResponse.next();
  response.headers.set("x-theme", theme);
  response.headers.set("x-is-mobile", `${isMobile}`);

  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get('user')?.value
  const session = await decrypt(cookie)
  const userData = session ? JSON.parse(session) : null
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !userData?.id) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    userData?.id &&
    !request.nextUrl.pathname.startsWith('/')
  ) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  return NextResponse.next()

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
