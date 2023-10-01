import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { shortenLink } from "../../services/apiLinks";
import { useNavigate } from "react-router-dom";

export function useShortenLink() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: create, isLoading } = useMutation({
    mutationFn: ({ longLink, createdBy, customShortLink, title }) =>
      shortenLink(longLink, createdBy, customShortLink, title),

    onSuccess: () => {
      toast.success("New Link Created");
      navigate("/app/links");
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },

    onError: () => {
      toast.error("Custom link already exists");
    },
  });

  return { create, isLoading };
}
