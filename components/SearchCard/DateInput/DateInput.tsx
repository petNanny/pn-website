import React, { useState } from 'react';
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

const defaultDate = new Date();

function Example() {
  const defaultSelected: DateRange = {
    from: defaultDate,
    to: defaultDate
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected); 

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }

  return (
    <DayPicker
      mode="range"
      defaultMonth={defaultDate}
      selected={range}
      footer={footer}
      onSelect={setRange}
    />
  );
}

const DateInput = () => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Dates</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <Example />
    </div>
  );
};

export default DateInput;
