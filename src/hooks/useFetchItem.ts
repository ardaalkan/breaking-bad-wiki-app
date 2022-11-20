import useSWR from "swr";
//unused
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getItems = async (filter: any) =>
  await await fetcher(
    filter !== ""
      ? `https://www.breakingbadapi.com/api/characters?name=${filter}`
      : `https://www.breakingbadapi.com/api/characters`
  );

const useGetItems = (filters: any) => {
  return useSWR(["items", filters], async () => await getItems(filters));
};

export default useGetItems;
