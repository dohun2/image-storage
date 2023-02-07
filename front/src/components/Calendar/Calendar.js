import { useCallback } from 'react';
import styled from 'styled-components';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth } from 'date-fns';
import Color from '../../utils/color';

const Calendar = ({ curMonth }) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const daysArray = useCallback(() => {
    const days = [];
    const startMonth = startOfMonth(curMonth);
    const endMonth = endOfMonth(startMonth);
    const firstWeek = startOfWeek(startMonth);
    const lastWeek = endOfWeek(endMonth);
    let day = firstWeek;

    while (day <= lastWeek) {
      let oneWeek = [];
      for (let i = 0; i < 7; i++) {
        if (isSameMonth(day, endMonth)) {
          oneWeek.push([format(day, 'd'), true]);
        } else {
          oneWeek.push([format(day, 'd'), false]);
        }
        day = addDays(day, 1);
      }
      days.push(oneWeek);
    }
    return days;
  }, [curMonth]);

  const days = daysArray();

  return (
    <Container>
      <Month>
        <span>{format(curMonth, 'M')}월</span>
      </Month>
      <Week>
        {week.map((v, i) => (
          <div key={i}>{v}</div>
        ))}
      </Week>
      <Days>
        {days.map((w, i) => (
          <OneWeek key={i}>
            {w.map(([d, b], j) => (
              <Day className={!b ? 'disabled' : 'enabled'} key={j}>
                {d}
              </Day>
            ))}
          </OneWeek>
        ))}
      </Days>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 17rem;
  border: 3px solid ${Color[500]};
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin: 0.5rem;
`;
const Month = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${Color[900]};
  text-align: center;
  margin-bottom: 0.3rem;
`;
const Week = styled.div`
  display: flex;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
  color: ${Color[900]};

  & > div {
    width: 100%;
  }
`;

const OneWeek = styled.div`
  display: flex;
  margin-bottom: 1rem;
  color: ${Color[800]};
  & :first-child {
    color: red;
  }
  & :last-child {
    color: red;
  }
`;

const Days = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Day = styled.div`
  width: 3rem;
  height: 1.3rem;
  border-radius: 2rem;
  &.enabled {
    cursor: pointer;
    &:hover {
      background-color: ${Color[300]};
    }
  }
  &.disabled {
    color: ${Color[100]};
  }
`;
