import { useQuery, useQueryClient } from "@tanstack/react-query";
import { searchAllLinksByUser } from "../../services/apiLinks";

export function useSearchLinks(id, searchText) {
  const queryClient = useQueryClient();

  const queryKey = ["searchLinks", id, searchText];

  const { data, isLoading } = useQuery(queryKey, () =>
    searchAllLinksByUser(id, searchText)
  );

  const invalidateSearchQuery = () => {
    queryClient.invalidateQueries(queryKey);
  };

  return { data, isLoading, invalidateSearchQuery };
}
