const TOKEN = 'gr0J-3BxjrLQ8DVCWttFXNwgs5KF1v9g'

export const fetcherAPI = async (api: string) => {
  const res = await fetch(api, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    }
  })

  return res.json()
}
