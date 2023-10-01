import { useQuery } from "@tanstack/react-query";
import { getAllClicksByUser } from "../../services/apiLinks";

export function useGetAllClicksByUser(id) {
  const { isLoading, data: clicks } = useQuery({
    queryKey: ["clicks"],
    queryFn: () => getAllClicksByUser(id),
  });

  return { isLoading, clicks };
}
