import { v4 as uuid } from 'uuid';

export const loginService = async (userData) => {
  const samlResponse = 'string';
  const { providerName, username, password } = userData;
  const deviceId = !JSON.parse(localStorage.getItem('deviceId'))
    ? uuid()
    : JSON.parse(localStorage.getItem('deviceId'));
  if (!JSON.parse(localStorage.getItem('deviceId'))) {
    localStorage.setItem('deviceId', JSON.stringify(deviceId));
  }
  const response = await fetch('admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.appgate.peer-v14+json'
    },
    body: JSON.stringify({ providerName, username, password, samlResponse, deviceId })
  });

  const data = await response.json();

  return data;
};
