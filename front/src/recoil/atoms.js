import { atom } from 'recoil';

const currentDay = atom({
  key: 'currentDay',
  default: new Date(),
});

export default currentDay;
