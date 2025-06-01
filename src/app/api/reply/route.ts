import { endPoints } from "@/services/endpoints";
import { TOKEN } from "@/services/fetcher";
import axios from "axios";

export async function POST(request: any) {
  const body = await request.json();
  try {
    const { data } = await axios.post(`${endPoints.commentReply}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return Response.json({ message: 'New reply', data });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: 'Failed to update user', detail: error.message }),
      { status: 500 }
    );
  }
}
