import { atom } from 'recoil';

export const selectedDayState = atom({
  key: 'selectedDay',
  default: new Date(),
});

export const selectedYearState = atom({
  key: 'selectedYear',
  default: new Date().getFullYear(),
});

export const showAddImageModalState = atom({
  key: 'showAddImageModal',
  default: false,
});

export const showCalendarModalState = atom({
  key: 'showCalendarModal',
  default: false,
});

export const showProfileModalState = atom({
  key: 'showProfileModal',
  default: false,
});
