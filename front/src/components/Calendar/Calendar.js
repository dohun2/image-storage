import { useCallback } from 'react';
import styled from 'styled-components';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';

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
        oneWeek.push(format(day, 'd'));
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
          <Week key={i}>
            {w.map((d, j) => (
              <div key={j}>{d}</div>
            ))}
          </Week>
        ))}
      </Days>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  border: 2px solid black;
`;
const Month = styled.div``;
const Week = styled.div`
  display: flex;
`;
const Days = styled.div``;
