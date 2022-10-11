import useSWR from "swr";
import { API_URL_QUOTES } from "../API";
import QuotesCard from "./QuotesCard";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Quotes = () => {
  const { data, error } = useSWR(API_URL_QUOTES, fetcher);

  if (error) {
    return <div className="font-bold text-gray-700 text-base">Error...</div>;
  }

  if (!data) {
    return <div className="font-bold text-gray-700 text-base">Loading...</div>;
  }

  console.log(data);
  //TODO: Name Filter
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 mt-6 mb-6">
        {data.map((data: any) => (
          <QuotesCard {...data} />
        ))}
      </div>
    </div>
  );
};

export default Quotes;
