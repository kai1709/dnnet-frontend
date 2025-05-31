import { endPoints } from "@/services/endpoints";
import { TOKEN } from "@/services/fetcher";
import axios from "axios";

export async function PATCH(request: any, context: any) {
  const { id: userId } = context.params;
  const body = await request.json();
  try {
    const { data } = await axios.patch(`${endPoints.getCmsUser}/${userId}`,
      body,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log({ data })

    return Response.json({ message: 'User updated', data });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: 'Failed to update user', detail: error.message }),
      { status: 500 }
    );
  }
}
