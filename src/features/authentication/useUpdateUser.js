import { useMutation, useQueryClient } from "@tanstack/react-query";
import { update as updateApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: update, isLoading } = useMutation({
    mutationFn: updateApi,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
    },

    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return { update, isLoading };
}
