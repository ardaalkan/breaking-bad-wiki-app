import useSWR, { SWRConfig } from "swr";
import { API_URL_QUOTES } from "../API";
import QuotesCard from "./QuotesCard";
import React from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
//revalidateOnFocus = true: auto revalidate when window gets focused.
export default function Quotes() {
  return (
    <SWRConfig value={{ revalidateOnFocus: false, fetcher }}>
      <QuotesFunc />
    </SWRConfig>
  );
}

function QuotesFunc() {
  const { data, error } = useSWR(API_URL_QUOTES);

  if (error) {
    return <div className="font-bold text-gray-700 text-base">Error...</div>;
  }

  if (!data) {
    return <div className="font-bold text-gray-700 text-base">Loading...</div>;
  }

  //TODO: Name Buttons Filter
  //TODO: Name Buttons Filter
  //TODO: Name Buttons Filter
  //TODO: Name Buttons Filter
  //TODO: Name Buttons Filter
  //TODO: Name Buttons Filter
  //TODO: Name Buttons Filter
  //TODO: Name Buttons Filter

  return (
    <DisplayQuotesFunc
      dataQuotes={data}
      quotes={[...new Set(data.map((quotes: any) => quotes.author))]}
    />
  );
}

function DisplayQuotesFunc({ dataQuotes, quotes }: any) {
  const [filterQuote, setFilterQuote] = React.useState(null);
  console.log(filterQuote);
  const filteredQuote = filterQuote
    ? dataQuotes.filter((datas: any) => datas.quote)
    : dataQuotes;

  console.log(filteredQuote);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 mt-6 mb-6">
        <div className="flex justify-evenly p-1 m-1">
          {quotes.map((quote: any) => (
            <button
              className="p-2 bg-slate-300 m-1 rounded-md hover:bg-slate-400 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110"
              onClick={() => {
                setFilterQuote(quote);
              }}
              key={quote}
            >
              {quote}
            </button>
          ))}
        </div>
        {filterQuote && (
          <button
            className="p-1 bg-slate-200 hover:bg-slate-300"
            onClick={() => {
              setFilterQuote(null);
            }}
          >
            RESET
          </button>
        )}
        {filteredQuote.map((dataQuotes: any) => (
          <QuotesCard {...dataQuotes} />
        ))}
      </div>
    </div>
  );
}
