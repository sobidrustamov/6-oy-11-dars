import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useGetSearch = (search = "") => {
  console.log(search);
  return useQuery({
    queryKey: [`all`, search],
    queryFn: () => {
      return request
        .get(`/all`, { params: { title_like: search } })
        .then((res) => res.data);
    },
  });
};
