import { useQuery } from "@tanstack/react-query";
import { getAllLinksByUser } from "../../services/apiLinks";

export function useGetAllLinksByUser(id) {
  const { isLoading, data: links } = useQuery({
    queryKey: ["links"],
    queryFn: () => getAllLinksByUser(id),
  });

  return { isLoading, links };
}
