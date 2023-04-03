import React from "react";

const ServiceInput = () => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">I'm looking for</span>
      </label>
      <select className="select select-bordered w-full max-w-xs">
        <optgroup label="At the sitter's home">
          <option>Dog Boarding</option>
          <option>Doggy Day Care</option>
        </optgroup>
        <optgroup label="At your home">
          <option>Dog Walking</option>
          <option>Home Visits</option>
          <option>House Sitting</option>
        </optgroup>
      </select>
    </div>
  );
};

export default ServiceInput;
