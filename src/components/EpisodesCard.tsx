import React from "react";

const EpisodesCard = (data: any) => {
  return (
    <div className="w-3/5 rounded overflow-hidden shadow-lg m-auto mt-6">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="font-bold text-gray-700 text-base">
          Season: {data.season}
        </p>
        <p className="text-gray-700 text-base mt-3">Date: {data.air_date}</p>
      </div>
      <div className="px-6 pt-2 pb-2">
        {data.characters.map((data: any) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{data}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EpisodesCard;
