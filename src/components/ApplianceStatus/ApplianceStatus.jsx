import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const ApplianceStatus = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    } else {
      setToken(JSON.parse(localStorage.getItem('token')));
    }
  }, []);

  console.log('token', token);

  const URL = 'admin/stats/appliances';
  const stateData = useFetch(URL, token);

  console.log(stateData);

  return (
    <div>
      <h1>ApplianceStatus</h1>
      {stateData.loading && <div>Loading</div>}
    </div>
  );
};

export default ApplianceStatus;
