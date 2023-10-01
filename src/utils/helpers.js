import { LINK_LENGTH } from "./constants";

export function generateShortName() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = LINK_LENGTH;

  let shortName = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    shortName += characters.charAt(randomIndex);
  }

  return shortName;
}

export function formatDate(inputDate) {
  const now = new Date();
  const date = new Date(inputDate);
  const diffInMilliseconds = now - date;
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    if (seconds <= 1) {
      return "Just now";
    } else {
      return `${seconds} seconds ago`;
    }
  } else if (minutes < 60) {
    if (minutes === 1) {
      return "1 minute ago";
    } else {
      return `${minutes} minutes ago`;
    }
  } else if (hours < 24) {
    if (hours === 1) {
      return "1 hour ago";
    } else {
      return `${hours} hours ago`;
    }
  } else if (days <= 7) {
    if (days === 1) {
      return "1 day ago";
    } else {
      return `${days} days ago`;
    }
  } else if (weeks === 1) {
    return "1 week ago";
  } else if (months === 1) {
    return "1 month ago";
  } else if (years === 1) {
    return "1 year ago";
  } else {
    return `${years} years ago`;
  }
}

export function weekStartDate() {
  const currentDate = new Date();

  const currentWeekStartDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - 6
  );

  return { currentDate, currentWeekStartDate };
}
