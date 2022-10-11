import useSWR from "swr";
import { API_URL_CHARACTERS } from "../API";
import Character from "./Character";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CharacterList() {
  const { data, error } = useSWR(API_URL_CHARACTERS, fetcher);

  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div
      key={data.id}
      //tailwind - masonry layout
      className="columns-4 gap-3 w-[1200px] mx-auto space-y-3 pb-28 pt-6"
    >
      {data.map((data: any) => (
        <Character {...data} />
      ))}
    </div>
  );
}

export default CharacterList;
