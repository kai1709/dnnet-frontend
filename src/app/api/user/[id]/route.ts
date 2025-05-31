import { endPoints } from "@/services/endpoints";
import { TOKEN } from "@/services/fetcher";
import axios from "axios";

export async function PATCH(request, { params }) {
  const userId = params.id;
  const body = await request.json();
  console.log({ request, params })
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
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to update user', detail: error.message }),
      { status: 500 }
    );
  }
}
