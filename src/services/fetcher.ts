const TOKEN = "gr0J-3BxjrLQ8DVCWttFXNwgs5KF1v9g";

export const fetcherAPI = (api: string) => {
  return new Promise(async (resolve) => {
    const res = await fetch(api, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    resolve(data);
  });
};
