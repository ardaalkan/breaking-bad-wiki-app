import { useState } from "react";
import useSWR from "swr";
import { API_URL_CHARACTERS } from "../API";
import Character from "./Character";
import FilterName from "./FilterName";

export const seasons = {
  SEASON_ONE: "Season - 1",
  SEASON_TWO: "Season - 2",
  SEASON_THREE: "Season - 3",
  SEASON_FOUR: "Season - 4",
  SEASON_FIVE: "Season - 5",
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CharacterList() {
  const { data, error } = useSWR(API_URL_CHARACTERS, fetcher);
  const [selectedName, setSelectedName] = useState("");

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // console.log(selectedName);

  //TODO: SEARCH AND ENTER FİLTER
  //TODO: SEARCH AND ENTER FİLTER
  //TODO: SEARCH AND ENTER FİLTER
  //TODO: SEARCH AND ENTER FİLTER
  //TODO: SEARCH AND ENTER FİLTER
  //TODO: SEARCH AND ENTER FİLTER

  return (
    <div
      key={data.id}
      //tailwind - masonry layout
      className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28 pt-6"
    >
      <FilterName name={selectedName} setName={setSelectedName} />
      {data.map((data: any) => (
        <Character {...data} />
      ))}
    </div>
  );
}

export default CharacterList;
