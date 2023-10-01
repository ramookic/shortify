import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateLink } from "../../services/apiLinks";
import { useNavigate } from "react-router-dom";

export function useUpdateLink() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: update, isLoading } = useMutation({
    mutationFn: ({ id, title, shortLink }) => updateLink(id, title, shortLink),

    onSuccess: () => {
      toast.success("Link Updated");
      navigate("/app/links");
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },

    onError: () => {
      toast.error("Custom link already exists");
    },
  });

  return { update, isLoading };
}
