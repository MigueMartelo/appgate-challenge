import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './useForm';
describe('useFrom test', () => {
  const initialForm = {
    username: 'username',
    password: 'password'
  };

  test('should return a default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
  });

  test('should change form value username', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'username',
          value: 'usertest'
        }
      });
    });

    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, username: 'usertest' });
  });
});
