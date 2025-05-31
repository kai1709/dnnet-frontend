import { endPoints } from '@/services/endpoints';
import { fetcherAPI } from '@/services/fetcher';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const email = searchParams.get('email');
  const resCmsUser: any = await fetcherAPI(`${endPoints.getCmsUser}?fields=*&filter={ "email": { "_eq": "${email}" }}`)

  return new Response(
    JSON.stringify({ data: resCmsUser.data[0] }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
