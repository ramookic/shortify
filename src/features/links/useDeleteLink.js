import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteLink as deleteLinkAPI } from "../../services/apiLinks";
import { useNavigate } from "react-router-dom";

export function useDeleteLink() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deleteLink, isLoading } = useMutation({
    mutationFn: (id) => deleteLinkAPI(id),

    onSuccess: () => {
      toast.success("Link Deleted");
      navigate("/app/links");
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },

    onError: () => {
      toast.error("Link Cannot be Deleted");
    },
  });

  return { deleteLink, isLoading };
}
