import React, { useState } from "react";
import { format, eachDayOfInterval } from "date-fns";
import { DateRange, DayPicker, SelectRangeEventHandler } from "react-day-picker";

const StyledDayPicker = `
.rdp-day {
  width: 100%
}
  .rdp-day_selected, .rdp-day:hover {
    background-color: rgb(0, 195, 138);
  }
`;

export interface DateInputProps {
  changeSelectedStartAndEndDate: (startDate: string, endDate: string) => void;
}

const defaultDate = new Date();

function Example({ changeSelectedStartAndEndDate }: DateInputProps) {
  const defaultSelected: DateRange = {
    from: defaultDate,
    to: defaultDate,
  };
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");

  const handleRangeSelect: SelectRangeEventHandler = (range: DateRange | undefined) => {
    if (range?.from) {
      setFromValue(format(range.from, "dd/MM/y"));
    } else {
      setFromValue("");
    }
    if (range?.to) {
      setToValue(format(range.to, "dd/MM/y"));
    } else {
      setToValue("");
    }
    if (range?.from && range?.to) {
      const startDate: string = format(range.from, "yyyy-MM-dd");
      const endDate: string = format(range.to, "yyyy-MM-dd");
      changeSelectedStartAndEndDate(startDate, endDate);
    } else {
      changeSelectedStartAndEndDate("", "");
    }
    setSelectedRange(range);
  };

  return (
    <div className="dropdown">
      <label
        tabIndex={0}
        className="w-full justify-start text-base font-semibold max-w-xs btn btn-outline text-black border-2 border-slate-300 hover:border-slate-300 hover:bg-transparent hover:text-black"
      >
        {(fromValue ? fromValue : "Start Date") + " > " + (toValue ? toValue : "End Date")}
      </label>
      <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <style>{StyledDayPicker}</style>
        <DayPicker
          mode="range"
          defaultMonth={defaultDate}
          selected={selectedRange}
          onSelect={handleRangeSelect}
        />
      </div>
    </div>
  );
}

const DateInput = ({ changeSelectedStartAndEndDate }: DateInputProps) => {
  return (
    <div className="form-control dropdown max-w-xs w-full">
      <label tabIndex={0} className="label w-full max-w-xs">
        <span className="label-text">Dates</span>
      </label>
      <Example changeSelectedStartAndEndDate={changeSelectedStartAndEndDate} />
    </div>
  );
};

export default DateInput;
