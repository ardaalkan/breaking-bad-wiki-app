import { useNavigate } from "react-router-dom";

const Character = (data: any) => {
  const navigate = useNavigate();
  return (
    <div key={data.id}>
      <img
        src={data.img}
        alt="#"
        className="cursor-pointer break-inside-avoid w-full items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        onClick={() => navigate(`/characters/${data.char_id}`)}
      />
    </div>
  );
};

export default Character;
