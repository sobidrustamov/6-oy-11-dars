import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetBanners = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: () => {
      return request.get("/banner").then((res) => res.data);
    },
  });
};
