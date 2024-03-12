import { useGetProducts } from "../../service/query/useGetProducts";
import { Card } from "./card";

export const Computers = () => {
  const { data } = useGetProducts('computers');
  return (
    <div className="flex flex-col">
      {data?.slice(0, 3).map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};
