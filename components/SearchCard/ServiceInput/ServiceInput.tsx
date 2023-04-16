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
          <option className="text-base" value="Dog boarding">
            Dog boarding
          </option>
          <option className="text-base" value="Doggy day care">
            Doggy day care
          </option>
        </optgroup>
        <optgroup label="At your home">
          <option className="text-base" value="Dog walking">
            Dog walking
          </option>
          <option className="text-base" value="Home visits">
            Home visits
          </option>
          <option className="text-base" value="House sitting">
            House sitting
          </option>
        </optgroup>
      </select>
    </div>
  );
};

export default ServiceInput;
