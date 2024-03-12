import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetProducts = (url) => {
  return useQuery({
    queryKey: [`${url}`],
    queryFn: () => {
      return request.get(`/${url}`).then((res) => res.data);
    },
  });
};
