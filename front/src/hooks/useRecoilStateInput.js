import { useRecoilState, useRecoilCallback } from 'recoil';

const useRecoilStateInput = (initialData) => {
  const [value, setValue] = useRecoilState(initialData);
  const handler = useRecoilCallback((e) => {
    setValue(new Date(e.target.value));
  }, []);
  return [value, handler, setValue];
};

export default useRecoilStateInput;
