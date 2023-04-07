import React from "react";
import ServiceInput from "./ServiceInput/ServiceInput";
import AddressInput from "./AddressInput/AddressInput";
import DateInput from "./DateInput/DateInput";
import { useState, useCallback } from "react";

const SearchCard = () => {
  return (
    <div className="card w-fit shadow-2xl bg-base-100 mx-auto">
      <div className="card-body">
        <div className="grid grid-cols-2 gap-4 items-end">
          <ServiceInput />
          <AddressInput />
          <DateInput />
          <button className="btn btn-accent normal-case border-2 border-slate-300">Search now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
