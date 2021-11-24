import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import './ApplianceStatus.scss';

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

  const URL = 'admin/stats/appliances';
  const stateData = useFetch(URL, token);

  const applianceDataTable = stateData?.data?.map((appliance) => (
    <tr key={appliance.id}>
      <td>{appliance.name}</td>
      <td>{appliance.status}</td>
      <td>{appliance.cpu}</td>
      <td>{appliance.memory}</td>
      <td>
        {appliance.network.rxSpeed}/{appliance.network.txSpeed}
      </td>
      <td>{appliance.disk}</td>
      <td>{appliance.version}</td>
    </tr>
  ));

  const handleClick = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <h1>ApplianceStatus</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>CPU</th>
            <th>Memory</th>
            <th>Network out/in</th>
            <th>Disk</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>{applianceDataTable}</tbody>
      </table>
      <button className="btn-logout" onClick={handleClick}>
        Log out
      </button>
    </div>
  );
};

export default ApplianceStatus;
