import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setvalues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setvalues({
      ...values,
      [target.name]: value
    });
  };

  return [values, handleInputChange];
};
