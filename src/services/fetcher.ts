import axios from "axios"

export const TOKEN = 'gr0J-3BxjrLQ8DVCWttFXNwgs5KF1v9g'

export const fetcherAPI = async (api: string, token?: string) => {
  const res = await fetch(api, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token || TOKEN}`,
      'Content-Type': 'application/json'
    }
  })

  return res.json()
}

export const postFile = async (api: string, file: File) => {
  const formData = new FormData();
  formData.append('file', file); // selectedFile is a File object from an <input>

  const res = await axios.post(api, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer YOUR_ACCESS_TOKEN', // if required
    },
  })

  return res
}
