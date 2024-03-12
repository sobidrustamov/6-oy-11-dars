import { useGetProducts } from "../../service/query/useGetProducts";
import { Card } from "./card";

export const Smartfons = () => {
  const { data } = useGetProducts('phones');
  return (
    <div>
      {data?.slice(0, 3).map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};
