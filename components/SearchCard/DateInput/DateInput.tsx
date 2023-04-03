import React from "react";

const DateInput = () => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Dates</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
  );
};

export default DateInput;
