export async function fetchInitialData() {
  const BASE_URL = 'https://controller1.runsdp.com:8080/admin/identity-providers/names';

  const response = await fetch(BASE_URL, {
    headers: { Accept: 'application/vnd.appgate.peer-v14+json' }
  });

  const data = await response.json();

  return data;
}
