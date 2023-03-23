/* eslint-disable react-hooks/exhaustive-deps */
import constate from 'constate';
import moment from 'moment';
import {useEffect, useState} from 'react';

const useCalendarContext = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currenteViewDate, setCurrentViewDate] = useState<Date>(
    moment().toDate(),
  );

  const [isMonthlyMode, setMonthlyMode] = useState(true);

  useEffect(() => {
    if (selectedDate === null) {
      return;
    }

    const cv = moment(currenteViewDate).date(selectedDate.getDate()).toDate();
    setCurrentViewDate(cv);
  }, [selectedDate]);

  return {
    selectedDate,
    setSelectedDate,
    isMonthlyMode,
    currenteViewDate,
    setCurrentViewDate,
    setMonthlyMode,
  };
};

export const [
  CalendarProvider,
  useSelectedDate,
  useSelectDate,
  useCurrentViewDate,
  useSetCurrentViewDate,
  useIsMonthlyMode,
  useSetMonthlyMode,
] = constate(
  useCalendarContext,
  value => value.selectedDate,
  value => value.setSelectedDate,
  value => value.currenteViewDate,
  value => value.setCurrentViewDate,
  value => value.isMonthlyMode,
  value => value.setMonthlyMode,
);
