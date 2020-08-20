// client should follow Axios's API
async function render(client, url) {
  let response;

  try {
    response = await client.get(url);
  } catch (error) {
    console.error(error);
  }

  return response.data;
}

export { render };
