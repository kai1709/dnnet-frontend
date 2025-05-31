import { endPoints } from '@/services/endpoints';
import { fetcherAPI, postFile } from '@/services/fetcher';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const res: any = await postFile(`${endPoints.files}`, request.body.file)

  return new Response(
    JSON.stringify({ data: res }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
