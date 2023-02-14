import { selector } from 'recoil';
import { selectedDayState } from './atoms';
import getDateFormat from '../utils/getDateFormat';

export const pramsSelector = selector({
  key: 'getPrams',
  get: ({ get }) => {
    const selectedDay = get(selectedDayState);
    return getDateFormat(selectedDay);
  },
});
