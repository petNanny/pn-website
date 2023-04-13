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
        className="select select-bordered w-full max-w-xs border-slate-300 border-2"
        onChange={onChangHandler}
      >
        <optgroup label="At the sitter's home">
          <option value="Dog Boarding">Dog Boarding</option>
          <option value="Doggy Day Care">Doggy Day Care</option>
        </optgroup>
        <optgroup label="At your home">
          <option value="Dog Walking">Dog Walking</option>
          <option value="Home Visits">Home Visits</option>
          <option value="House Sitting">House Sitting</option>
        </optgroup>
      </select>
    </div>
  );
};

export default ServiceInput;
