import useSWR from "swr";
import { API_URL_EPISODES } from "../API";
import { seasons } from "./CharacterList";
import EpisodesCard from "./EpisodesCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CharacterList() {
  const { data, error } = useSWR(API_URL_EPISODES, fetcher);

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  //TODO: ADD CALENDER FİLTER
  //TODO: ADD CALENDER FİLTER
  //TODO: ADD CALENDER FİLTER
  //TODO: ADD CALENDER FİLTER
  //TODO: ADD CALENDER FİLTER
  //TODO: ADD CALENDER FİLTER

  return (
    <div
      key={data.id}
      //tailwind - masonry layout
      className="columns-1 gap-1 w-full mx-auto pt-6"
    >
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
        // value={}
        // onChange={}
      >
        <option value="">-- Please choose an season --</option>
        {/* TODO: Define to object values */}
        {Object.values(seasons).map((item, index) => (
          <option key={index}>{item}</option>
        ))}
        {<div className="p-4 bg-slate-500"></div>}
      </select>
      {data.map((data: any) => (
        <EpisodesCard {...data} />
      ))}
    </div>
  );
}

export default CharacterList;
