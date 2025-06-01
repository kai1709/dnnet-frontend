import { endPoints } from "@/services/endpoints";
import { TOKEN } from "@/services/fetcher";
import axios from "axios";

export async function POST(request: any) {
  const body = await request.json();
  const commentId = body.comment
  const replyId = body.reply
  const userId = body.user

  const res = await axios.get(`${endPoints.likes}?fields=*&filter={ "${commentId ? 'comment' : 'reply'}": { "_eq": "${commentId || replyId}" }, "user": { "_eq": "${userId}" }}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    })

  if (res.data.data.length === 0) {
    const { data } = await axios.post(`${endPoints.likes}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return Response.json({ message: 'New comment', data });
  } else {
    const { data } = await axios.delete(`${endPoints.likes}/${res.data.data[0].id}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return Response.json({ message: 'New comment', data });
  }
}
