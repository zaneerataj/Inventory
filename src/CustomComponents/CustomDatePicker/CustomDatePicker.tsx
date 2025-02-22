import React, { FC, useState } from 'react';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../../@/lib/utils';
import { Calendar } from '../../../components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../components/ui/popover';
// import CustomButton from "../CustomButton/CustomButton";
import { Button } from '../../../components/ui/button';
import { Select, SelectTrigger, SelectValue } from '@radix-ui/react-select';

interface CustomDatePickerProps {
  selected: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ selected, onChange }) => {
  const [date, setDate] = useState<Date>();

  // Wrapper function for onSelect
  const handleDateSelect = (event: Event, day: Date) => {
    setDate(day);
  };

  return (
    <Popover>
    <PopoverTrigger asChild>
      <Button
        variant={'outline'}
        className={cn(
          'w-[362px] justify-start text-left font-normal',
          !date && 'text-muted-foreground',
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? format(date, 'PPP') : <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent className="flex w-auto flex-col space-y-2 p-2 ">
   
      <div className="rounded-md border ">
        <Calendar mode="single" selected={date} onSelect={setDate}  />
      </div>
    </PopoverContent>
  </Popover>
  );
};

export default CustomDatePicker;

// import React,{FC} from "react";
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"

// import { cn } from "../../../@/lib/utils";
// import { Calendar } from "../../../components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "../../../components/ui/popover"
// import CustomButton from "../CustomButton/CustomButton";

// const CustomDatePicker: FC=()=>{
//     const [date, setDate] = React.useState<Date>()

//     return (
//       <Popover>
//         <PopoverTrigger asChild>
//           <CustomButton
//             variant={"outline"}
//             label="Date Picker"
//             className={cn(
//               "w-[280px] justify-start text-left font-normal",
//               !date && "text-muted-foreground"
//             )}
//           >
//             <CalendarIcon className="mr-2 h-4 w-4" />
//             {date ? format(date, "PPP") : <span>Pick a date</span>}
//           </CustomButton>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0">
//           <Calendar
//             mode="single"
//             selected={date}
//             onSelect={setDate}
//             initialFocus
//           />
//         </PopoverContent>
//       </Popover>
//     );
// };
// export default CustomDatePicker;
