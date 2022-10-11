import useSWR from "swr";
import { API_URL_EPISODES } from "../API";
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
  return (
    <div
      key={data.id}
      //tailwind - masonry layout
      className="columns-1 gap-1 w-full mx-auto pt-6"
    >
      {data.map((data: any) => (
        <EpisodesCard {...data} />
      ))}
    </div>
  );
}

export default CharacterList;
