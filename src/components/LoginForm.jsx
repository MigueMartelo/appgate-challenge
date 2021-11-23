import { useState, useEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { fetchInitialData } from '../utils/fetchInitialData';
import './LoginForm.scss';

const LoginForm = () => {
  const [initialData, setInitialData] = useState([]);
  const [formState, setFormState] = useForm({
    provider: '',
    username: '',
    password: '',
    keepsigned: false
  });

  const { provider, username, password, keepsigned } = formState;

  useEffect(() => {
    const getInitialData = async () => {
      const data = await fetchInitialData();
      setInitialData(data);
    };

    getInitialData();
  }, []);

  const { data, bannerMessage } = initialData;

  const options = data?.map((item) => (
    <option value={item.name} key={item.name}>
      {item.displayName}
    </option>
  ));

  return (
    <div className="login">
      <p>{bannerMessage}</p>
      <form className="login-form">
        <label htmlFor="provider">Indentity Provider</label>
        <select name="provider" value={provider} onChange={setFormState}>
          <option value="">Select the provider</option>
          {options}
        </select>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={username} onChange={setFormState} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} onChange={setFormState} />
        <label htmlFor="keepsigned">
          <input type="checkbox" name="keepsigned" checked={keepsigned} onChange={setFormState} />
          Keep me signed in until token expires
        </label>
        <button className="login-form__btn">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
