export async function HttpClient(fetchUrl, fetchOptions) {
  return fetch(fetchUrl, {
    ...fetchOptions,
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers
    },
    body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null,
  })
  .then(async (respostaDoServidor) => {
    return {
      ok: respostaDoServidor.ok,
      body: await respostaDoServidor.json()
    }
  });
}