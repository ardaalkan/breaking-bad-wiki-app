import { useState } from "react";
import useSWR from "swr";
import { API_URL_EPISODES } from "../API";
import EpisodesCard from "./EpisodesCard";
import FilterEpisodes from "./FilterEpisodes";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CharacterList() {
  const { data, error } = useSWR(API_URL_EPISODES, fetcher);

  const [filter, setFilter] = useState("");

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
      <FilterEpisodes filter={filter} setFilter={setFilter} />
      {data.map((data: any) => (
        <EpisodesCard {...data} />
      ))}
    </div>
  );
}

export default CharacterList;
