import { useQuery } from "@tanstack/react-query";
import { getAllClicksByLink } from "../../services/apiLinks";

export function useGetAllClicksByLink(id) {
  const { isLoading, data: clicks } = useQuery({
    queryKey: [id, "clicks"],
    queryFn: () => getAllClicksByLink(id),
  });

  return { isLoading, clicks };
}
