import { useState, useEffect } from 'react';

export const useFetch = (url, token) => {
  const [state, setState] = useState({});
  const options = {
    headers: {
      Accept: 'application/vnd.appgate.peer-v14+json',
      Authorization: `Bearer ${token}`
    }
  };

  useEffect(async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    setState(data);
  }, [url, token]);

  return state;
};
