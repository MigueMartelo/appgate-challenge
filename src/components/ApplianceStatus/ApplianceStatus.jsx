import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplianceStatus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <h1>ApplianceStatus</h1>
    </div>
  );
};

export default ApplianceStatus;
