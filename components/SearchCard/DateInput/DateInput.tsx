import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler
} from 'react-day-picker';

const defaultDate = new Date();

function Example() {
  const defaultSelected: DateRange = {
    from: defaultDate,
    to: defaultDate
  };
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');


  const handleRangeSelect: SelectRangeEventHandler = (
    range: DateRange | undefined
  ) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, 'dd/MM/y'));
    } else {
      setFromValue('');
    }
    if (range?.to) {
      setToValue(format(range.to, 'dd/MM/y'));
    } else {
      setToValue('');
    }
  };

  return (
  <div >
    <div className='grid grid-cols-2 gap-4 max-w-xs'>
        <span>{fromValue}</span>
        <span>{toValue}</span>
    </div>
        {/* <input
          value={fromValue}
          // onChange={handleInput}
          // disabled={!ready}
          className="input input-bordered max-w-xs"
        />
        <input
          value={toValue}
          // onChange={handleInput}
          // disabled={!ready}
          className="input input-bordered max-w-xs"
        /> */}
    <div className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
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

const DateInput = () => {
  return (
    <div className="form-control dropdown">
      <label tabIndex={0} className="label">
        <span className="label-text">Dates</span>
      </label>
      {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
      <Example />
    </div>
  );
};

export default DateInput;
