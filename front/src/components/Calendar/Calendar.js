import { useCallback } from 'react';
import styled from 'styled-components';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth } from 'date-fns';

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
        <span>
          {format(curMonth, 'yyyy')}년 {format(curMonth, 'M')}월
        </span>
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
              <Day className={!b ? 'disable' : 'able'} key={j}>
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
  height: 10%;
  border: 1px solid black;
  margin: 0.5rem;
`;
const Month = styled.div`
  border: 1px solid black;
  font-weight: 600;
`;
const Week = styled.div`
  display: flex;
  border: 1px solid black;
  text-align: center;
  & > div {
    width: 100%;
    /* border: 1px solid black; */
  }
`;

const OneWeek = styled.div`
  display: flex;
  & :first-child {
    color: red;
  }
  & :last-child {
    color: blue;
  }
`;

const Days = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Day = styled.div`
  width: 100%;
  border: 1px solid black;
  &.able {
    cursor: pointer;
  }
  &.disable {
    color: gray;
  }
`;
