import { endPoints } from "@/services/endpoints";
import { TOKEN } from "@/services/fetcher";
import axios from "axios";

export async function POST(request: any) {
  const body = await request.json();
  try {
    const { data } = await axios.post(`${endPoints.comments}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return Response.json({ message: 'New comment', data });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: 'Failed to update user', detail: error.message }),
      { status: 500 }
    );
  }
}

export async function GET(request: any) {
  const searchParams = request.nextUrl.searchParams;
  const newsId = searchParams.get('id');
  try {
    const { data } = await axios.get(`${endPoints.comments}?fields=*,likes.*,author.*,replies.*,replies.author.*, replies.likes.*&filter={ "news_id": { "_eq": "${newsId}" }}&sort=-date_created`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return Response.json({ message: 'New comment', data });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: 'Failed to update user', detail: error.message }),
      { status: 500 }
    );
  }
}
