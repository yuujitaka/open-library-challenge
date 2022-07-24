import { useQuery } from "@tanstack/react-query";
import api from "../../services";

const searchBooks = async (query: string, page: number, limit: string) => {
  const response = await api.get(
    `/search.json?title=${query}&page=${page}&limit=${limit}`
  );

  return response.data;
};

const useSearchBooks = (query: string, page: number, limit: string) => {
  return useQuery(
    ["search", query, page, limit],
    () => searchBooks(query, page, limit),
    {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: !!query,
    }
  );
};

export default useSearchBooks;
