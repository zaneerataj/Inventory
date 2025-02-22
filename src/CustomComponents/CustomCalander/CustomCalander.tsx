import React, { FC, useState } from 'react';
import { Calendar } from '../../../components/ui/calendar';

interface CustomCalanderProps {
  date?: any;
  setDate?: any;
}

const CustomCalander: FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export default CustomCalander;
