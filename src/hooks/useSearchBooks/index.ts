import { useQuery } from "@tanstack/react-query";
import api from "../../services";

const searchBooks = async (query: string, limit: string) => {
  const response = await api.get(`/search.json?title=${query}&limit=${limit}`);
  console.log("response.data", response.data);
  return response.data;
};

const useSearchBooks = (query: string, limit: string) => {
  return useQuery(["search", query], () => searchBooks(query, limit), {
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !!query,
  });
};

export default useSearchBooks;
