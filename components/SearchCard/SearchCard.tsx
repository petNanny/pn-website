import React from "react";

const SearchCard = () => {
  return (
    <div className="card max-w-sm shadow-2xl bg-base-100 mx-auto">
      <div className="card-body">
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
        <div className="form-control mt-6">
          <button className="btn btn-accent normal-case border-none">Search now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
