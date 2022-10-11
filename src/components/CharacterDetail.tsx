import { useParams } from "react-router";
import { useState } from "react";
import { API_URL_CHARACTERS } from "../API";
import useSWR from "swr";
import CharacterDetailComponent from "./CharacterDetailComponent";

interface characterType {
  category: string;
  img: string;
  name: string;
  statu: string;
  occuption: string;
}

// const CharacterDetail = () => {
//   const { id } = useParams();
//   const [character, setCharacter] = useState<characterType>();

//   useEffect(() => {
//     fetch(`${API_URL_CHARACTERS}/${id}`)
//       .then((response) => response.json())
//       .then((data) => setCharacter(data));
//   }, [id]);

//   console.log(character);

//   return (
//     <pre>
//       {character?.name}
//     </pre>
//   );
// };

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState<characterType>();
  const { data, error } = useSWR(`${API_URL_CHARACTERS}/${id}`, fetcher);

  if (error) {
    return <div className="font-bold text-gray-700 text-base">Error...</div>;
  }

  if (!data) {
    return <div className="font-bold text-gray-700 text-base">Loading...</div>;
  }

  console.log(data);

  return (
    <>
      {data.map((data: any) => (
        <CharacterDetailComponent {...data} />
      ))}
    </>
  );
}

export default CharacterDetail;
