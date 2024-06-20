import React, { useState } from 'react';

export type DateType = {
  days: number | null;
  months: number | null;
  years: number | null;
};

export type ErrorDateType = {
  days: string | null;
  months: string | null;
  years: string | null;
};

export const useDateRangeCalc = () => {
  const [calculatedDate, setCalculatedDate] = useState<DateType>({
    days: null,
    months: null,
    years: null,
  });

  const [date, setDate] = useState<DateType>({
    years: null,
    months: null,
    days: null,
  });

  const [errors, setErrors] = useState<ErrorDateType>({
    years: null,
    months: null,
    days: null,
  });

  const isValidDate = (year: number, month: number, day: number): boolean => {
    const testDate = new Date(year, month - 1, day); 
    return (
      testDate.getFullYear() === year &&
      testDate.getMonth() === month - 1 && 
      testDate.getDate() === day
    );
  };

  const validate = () => {
    const newErrors: ErrorDateType = { years: null, months: null, days: null };

    if (!date.days || isNaN(date.days)) {
      newErrors.days = 'This Field is Required';
    } else if (date.days < 1 || date.days > 31) {
      newErrors.days = 'Must be a valid day';
    }

    if (!date.months || isNaN(date.months)) {
      newErrors.months = 'This Field is Required';
    } else if (date.months < 1 || date.months > 12) {
      newErrors.months = 'Must be a valid month';
    }

    if (!date.years || isNaN(date.years)) {
      newErrors.years = 'This Field is Required';
    } else if (date.years < 1900 || date.years > new Date().getFullYear()) {
      newErrors.years = 'Must be a valid year';
    }

    if (date.years && date.months && date.days && !newErrors.days && !newErrors.months && !newErrors.years) {
      if (!isValidDate(date.years, date.months, date.days)) {
        newErrors.days = 'Must be a valid date';
        newErrors.months = ' ';
        newErrors.years = ' ';
       
      }
    }

    setErrors(newErrors);
    if(newErrors.days || newErrors.months || newErrors.years){
        setCalculatedDate({
            days: null,
            months: null,
            years: null,
          })
    }

    return !newErrors.days && !newErrors.months && !newErrors.years;
  };

  const calcDate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      const today = new Date();
      const selectedDate = new Date(date.years!, date.months! - 1, date.days!);
      if (today >= selectedDate) {
        const yearsDiff = today.getFullYear() - selectedDate.getFullYear();
        const monthsDiff = today.getMonth() - selectedDate.getMonth();
        const daysDiff = today.getDate() - selectedDate.getDate();

        let calculatedYears = yearsDiff;
        let calculatedMonths = monthsDiff;
        let calculatedDays = daysDiff;

        if (daysDiff < 0) {
          calculatedMonths--;
          const tempDate = new Date(today.getFullYear(), today.getMonth(), 0); 
          calculatedDays = tempDate.getDate() + daysDiff;
        }

        if (monthsDiff < 0) {
          calculatedYears--;
          calculatedMonths += 12;
        }

        setCalculatedDate({
          years: calculatedYears,
          months: calculatedMonths,
          days: calculatedDays,
        });
      } else {
        setErrors({
          years: ' ',
          months: ' ',
          days: 'date is not allowed',
        });
        setCalculatedDate({
            days: null,
            months: null,
            years: null,
          })
      }
    }
  };

  return { date, setDate, errors, calcDate, calculatedDate };
};
