// client should follow Axios's API
async function getFromUrl(client, url) {
  let response;

  try {
    response = await client.get(url);
  } catch (error) {
    console.error(error);
  }

  return response.data;
}

export { getFromUrl };
