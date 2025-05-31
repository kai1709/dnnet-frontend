import axios from 'axios';
import { API_URL, endPoints } from '@/services/endpoints';
import { TOKEN } from '@/services/fetcher';

export const config = {
  api: {
    bodyParser: false, // Required to handle raw request
  },
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = (await formData).get('file')
    console.log({ file })
    const res = await axios.post(endPoints.files, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${TOKEN}`,
      }
    })

    console.log({ res: res.data.data })

    return Response.json({ message: 'Upload successful', data: { url: `${API_URL}/assets/${res.data.data.id}` } });
  } catch (error: any) {
    console.log({ error: error })
  }
}
