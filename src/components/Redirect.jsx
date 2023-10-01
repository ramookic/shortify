import { useParams } from "react-router-dom";

import { redirect } from "../services/apiLinks";

function Redirect() {
  const { shortUrl } = useParams();

  redirect(shortUrl);

  return null;
}

export default Redirect;
