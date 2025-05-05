import { THEME_LAYOUT } from "@/constants/keys";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
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

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
