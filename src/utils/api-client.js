async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { "content-type": "application/json" };

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${process.env.VUE_APP_API_HOST}/${endpoint}`, config)
    .then(async (r) => {
      if (r.status === 400) {
        return Promise.reject({ message: "Please re-authenticate." });
      }
      const data = await r.json();
      if (r.ok) {
        return Promise.resolve(data);
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };