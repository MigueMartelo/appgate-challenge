export async function fetchInitialData() {
  const URL = `admin/identity-providers/names`;

  const response = await fetch(URL, {
    headers: { Accept: 'application/vnd.appgate.peer-v14+json' }
  });

  const data = await response.json();

  return data;
}
