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

  console.log(data);

  return (
    <div key={data.id}>
      {data.map((image: any) => (
        <img
          src={image.img}
          alt="#"
          className="w-72 h-96 flex items-center mx-auto"
        />
      ))}
    </div>
  );
}

export default CharacterList;
