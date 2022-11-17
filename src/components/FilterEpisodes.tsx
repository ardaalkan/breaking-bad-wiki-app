import React, { useState } from "react";
import { seasons } from "./CharacterList";

interface FilterNameProps { 
  filter: any,
  setFilter: any
}

const FilterEpisodes = ({ filter, setFilter }: FilterNameProps) => {

  const onChangeCategory = (e: any) => {
    setFilter(e.target.value);
  };

  console.log(filter);

  return (
    <select
      className="w-3/5 overflow-hidden shadow-lg mt-6 form-select appearance-none
    flex
    mx-auto
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      name="filter"
      id="filter-select"
      value={filter ?? ""}
      onChange={onChangeCategory}
    >
      <option value="">-- Choose an season --</option>
      {/* TODO: Define to object values */}
      {Object.values(seasons).map((item, index) => (
        <option key={index}>{item}</option>
      ))}
      {filter && (
        <div
          onClick={() => {
            setFilter([]);
          }}
        ></div>
      )}{" "}
    </select>
  );
};

export default FilterEpisodes;
