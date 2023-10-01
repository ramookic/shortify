import { useMutation } from "@tanstack/react-query";
import { passwordRecovery } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function usePasswordRecovery() {
  const { mutate: reset, isLoading } = useMutation({
    mutationFn: ({ email }) => passwordRecovery(email),
    onSuccess: () => {
      toast.success("Password reset sent");
    },

    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return { reset, isLoading };
}
