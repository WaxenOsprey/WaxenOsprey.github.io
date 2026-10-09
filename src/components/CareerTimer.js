
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const START_DATE = new Date('2023-10-03T09:00:00+01:00');
const START_YEAR = 2023;

const MS_SECOND = 1000;
const MS_MINUTE = 60 * MS_SECOND;
const MS_HOUR = 60 * MS_MINUTE;
const MS_DAY = 24 * MS_HOUR;

const getAnniversary = (year) => {
  return new Date(`${year}-10-03T09:00:00+01:00`);
};

const calculateElapsed = (now) => {
  if (now < START_DATE.getTime()) {
    return {
      years: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    };
  }

  // Calculate completed calendar years
  let years = new Date(now).getUTCFullYear() - START_YEAR;

  if (now < getAnniversary(START_YEAR + years).getTime()) {
    years--;
  }

  // Calculate time elapsed since the last anniversary
  const lastAnniversary = getAnniversary(START_YEAR + years);
  let remaining = now - lastAnniversary.getTime();

  const days = Math.floor(remaining / MS_DAY);
  remaining %= MS_DAY;

  const hours = Math.floor(remaining / MS_HOUR);
  remaining %= MS_HOUR;

  const minutes = Math.floor(remaining / MS_MINUTE);
  remaining %= MS_MINUTE;

  const seconds = Math.floor(remaining / MS_SECOND);
  const milliseconds = remaining % MS_SECOND;

  return {
    years,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
};

const CareerTimer = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const elapsed = calculateElapsed(now);

  const timeUnits = [
    { label: 'YEARS', value: elapsed.years, digits: 2 },
    { label: 'DAYS', value: elapsed.days, digits: 3 },
    { label: 'HOURS', value: elapsed.hours, digits: 2 },
    { label: 'MINUTES', value: elapsed.minutes, digits: 2 },
    { label: 'SECONDS', value: elapsed.seconds, digits: 2 },
    {
      label: 'MILLISECONDS',
      value: elapsed.milliseconds,
      digits: 3,
    },
  ];

  return (
    <TimerContainer>
      <TimerHeading>TIME IN TECH</TimerHeading>

      <TimerGrid role="timer" aria-live="off">
        {timeUnits.map((unit) => (
          <TimerUnit key={unit.label}>
            <TimerValue>
              {String(unit.value).padStart(unit.digits, '0')}
            </TimerValue>
            <TimerLabel>{unit.label}</TimerLabel>
          </TimerUnit>
        ))}
      </TimerGrid>

      <TimerCaption>
        Counting since 03 October 2023, 09:00 BST
      </TimerCaption>
    </TimerContainer>
  );
};

// Styled Components

const TimerContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 950px;
  margin: 2rem 0;
`;

const TimerHeading = styled.h2`
  color: rgb(92, 188, 177);
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 0.08em;
  margin: 0 0 1rem;
`;

const TimerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const TimerUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  background-color: rgba(20, 35, 60, 0.6);
  border: 1px solid rgba(92, 188, 177, 0.25);
  border-radius: 5px;
  min-width: 0;
`;

const TimerValue = styled.span`
  color: rgb(203, 214, 244);
  font-size: clamp(1.2rem, 2.2vw, 1.8rem);
  font-variant-numeric: tabular-nums;
  font-weight: 500;
`;

const TimerLabel = styled.span`
  color: rgb(135, 145, 174);
  font-size: 0.65rem;
  letter-spacing: 0.05em;
`;

const TimerCaption = styled.p`
  color: rgb(135, 145, 174);
  font-size: 0.8rem;
  margin: 1rem 0 0;
`;

export default CareerTimer;
