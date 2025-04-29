import { THEME_LAYOUT } from '@/constants/keys';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const theme = request.cookies.get(THEME_LAYOUT)?.value || '';
  const response = NextResponse.next();
  response.headers.set('x-theme', theme);
  return response;
}