import { useState } from "react";
import useSWR from "swr";
import { API_URL_CHARACTERS } from "../API";
import Character from "./Character";
import FilterName from "./FilterName";

export const seasons = {
  SEASON_ONE: "Season : 1",
  SEASON_TWO: "Season : 2",
  SEASON_THREE: "Season : 3",
  SEASON_FOUR: "Season : 4",
  SEASON_FIVE: "Season : 5",
};

// const char_limit = 5;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CharacterList() {
  const [selectedName, setSelectedName] = useState("");
  const { data, error } = useSWR(API_URL_CHARACTERS, fetcher);

  // TODO: ADD MORE (FETCH)
  // const nextPage = page * char_limit;
  // const { data, error } = useSWR(
  //   `${API_URL_CHARACTERS}/?limit=${char_limit}&offset=${nextPage}`,
  //   fetcher
  // );

  // const nextPage = page * char_limit;
  // const { data, error } = useSWR(`${API_URL_CHARACTERS}/?limit=${char_limit}&offset=${nextPage}`, fetcher);

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  //TODO: SEARCH AND ENTER FİLTER
  //TODO: SEARCH AND ENTER FİLTER
  //TODO: SEARCH AND ENTER FİLTER
  //TODO: SEARCH AND ENTER FİLTER
  //TODO: SEARCH AND ENTER FİLTER
  //TODO: SEARCH AND ENTER FİLTER

  return (
    <>
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
      {/* {loading ? <div>loading</div> : <div></div>} */}
        {/* LOAD MORE CHARACTER
        LOAD MORE CHARACTER 
        LOAD MORE CHARACTER 
        LOAD MORE CHARACTER 
        LOAD MORE CHARACTER  */}
      <div className="p-6 m-2 bg-slate-400 text-white cursor-pointer text-2xl rounded-sm">
        Load More ({"nextPage"})
      </div>
    </>
  );
}

export default CharacterList;
