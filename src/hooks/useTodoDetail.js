import useSWR from "swr";
import fetcher from "../utils/fetcher";

function useTodoDetail(id) {
  const { data, isLoading, error } = useSWR(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
  };
}

export default useTodoDetail;
