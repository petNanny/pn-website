import React from "react";

export interface PetServiceInputProps {
  changePetService: (value: string) => void;
}

const ServiceInput = ({ changePetService }: PetServiceInputProps) => {
  const onChangHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    changePetService(value);
  };
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">I&apos;m looking for</span>
      </label>
      <select
        className="select text-base select-bordered w-full max-w-xs border-slate-300 border-2"
        onChange={onChangHandler}
      >
        <optgroup label="At the sitter's home">
          <option className="text-base" value="Dog Boarding">
            Dog Boarding
          </option>
          <option className="text-base" value="Doggy Day Care">
            Doggy Day Care
          </option>
        </optgroup>
        <optgroup label="At your home">
          <option className="text-base" value="Dog Walking">
            Dog Walking
          </option>
          <option className="text-base" value="Home Visits">
            Home Visits
          </option>
          <option className="text-base" value="House Sitting">
            House Sitting
          </option>
        </optgroup>
      </select>
    </div>
  );
};

export default ServiceInput;
