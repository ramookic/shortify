export const LINK_LENGTH = 6;
export const RESERVED_KEYWORDS = ["app", "signup", "login", "not-found"];
export const DOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://shortify369.netlify.app"
    : "http://localhost:5173";
