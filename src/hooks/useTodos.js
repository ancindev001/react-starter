import useSWR from "swr";
import fetcher from "../utils/fetcher";

function useTodos() {
  const { data, isLoading, error } = useSWR(
    `https://jsonplaceholder.typicode.com/todos`,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
}

export default useTodos;
