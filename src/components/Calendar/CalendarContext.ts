import constate from 'constate';
import moment from 'moment';
import {useState} from 'react';

const useCalendarContext = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currenteMonth, setCurrentMonth] = useState<Date>(moment().toDate());

  return {
    selectedDate,
    setSelectedDate,
    currenteMonth,
    setCurrentMonth,
  };
};

export const [
  CalendarProvider,
  useSelectedDate,
  useSelectDate,
  useCurrentMonth,
  useSetCurrentMonth,
] = constate(
  useCalendarContext,
  value => value.selectedDate,
  value => value.setSelectedDate,
  value => value.currenteMonth,
  value => value.setCurrentMonth,
);
