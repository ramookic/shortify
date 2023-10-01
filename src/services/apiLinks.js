import supabase from "./supabase";
import { DOMAIN, RESERVED_KEYWORDS } from "../utils/constants";
import { generateShortName } from "../utils/helpers";

export async function getAllLinksByUser(id) {
  const { data, error } = await supabase
    .from("links")
    .select("*")
    .filter("createdBy", "eq", id)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  const clickPromises = data.map((link) => getAllClicksByLink(link.id));

  const clickResults = await Promise.all(clickPromises);

  const linksWithClicks = data.map((link, index) => ({
    link,
    clicks: clickResults[index],
  }));

  return linksWithClicks;
}

export async function getAllClicksByLink(id) {
  const { data, error } = await supabase
    .from("clicks")
    .select("*")
    .filter("linkId", "eq", id);

  if (error) throw new Error(error.message);
  return data;
}

export async function getAllClicksByUser(id) {
  const { data: linksData, error: linksError } = await supabase
    .from("links")
    .select("id")
    .filter("createdBy", "eq", id);

  if (linksError) throw new Error(linksError.message);

  const linkIds = linksData.map((link) => link.id);

  const { data, error } = await supabase
    .from("clicks")
    .select("*")
    .in("linkId", linkIds);

  if (error) throw new Error(error.message);

  return data;
}

async function trackClick(linkId, userAgent, userLocation) {
  const { error } = await supabase.from("clicks").insert([
    {
      linkId,
      userAgent: userAgent,
      location: userLocation,
    },
  ]);

  if (error) throw new Error(error.message);
}

export async function shortenLink(longLink, createdBy, customShortLink, title) {
  const { data: existingData, error: existingError } = await supabase
    .from("links")
    .select("shortLink");

  if (existingError) throw new Error(existingError.message);

  const existingShortLinks = existingData.map((item) => item.shortLink);

  if (customShortLink) {
    if (RESERVED_KEYWORDS.includes(customShortLink)) {
      throw new Error("Custom short link is reserved.");
    }
    if (existingShortLinks.includes(customShortLink)) {
      throw new Error("Custom short link already exists.");
    }
  }

  let shortLink = customShortLink || generateShortName();

  while (existingShortLinks.includes(shortLink)) {
    shortLink = generateShortName();
  }

  if (!title) {
    try {
      const response = await fetch(longLink);
      const html = await response.text();
      const match = /<title>(.*?)<\/title>/i.exec(html);
      title = match ? match[1] : "Untitled";
    } catch (error) {
      console.error("Error fetching title:", error);
      title = "Untitled";
    }
  }

  const { data: insertedData, error: insertError } = await supabase
    .from("links")
    .upsert([
      {
        longLink: longLink,
        shortLink: shortLink,
        createdBy: createdBy,
        title: title,
      },
    ]);

  if (insertError) throw new Error(insertError.message);

  return insertedData;
}

export async function updateLink(id, title, shortLink) {
  const updateFields = {};

  if (title !== undefined && title.trim() !== "") {
    updateFields.title = title;
  }

  if (shortLink !== undefined && shortLink.trim() !== "") {
    if (RESERVED_KEYWORDS.includes(shortLink)) {
      throw new Error("Custom short link is reserved.");
    }

    const { data: existingData, error: existingError } = await supabase
      .from("links")
      .select("shortLink")
      .neq("id", id);

    if (existingError) {
      throw new Error(existingError.message);
    }

    const existingShortLinks = existingData.map((item) => item.shortLink);

    if (existingShortLinks.includes(shortLink)) {
      throw new Error("Custom short link already exists.");
    }

    updateFields.shortLink = shortLink;
  }

  if (Object.keys(updateFields).length === 0) {
    return null;
  }

  const { data, error } = await supabase
    .from("links")
    .update(updateFields)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteLink(id) {
  await supabase.from("clicks").delete().eq("linkId", id);
  const { data, error } = await supabase.from("links").delete().eq("id", id);

  if (error) {
    throw new Error("Link could not be deleted");
  }

  return data;
}

export async function redirect(shortLink) {
  document.title = "Redirecting...";

  const { data, error } = await supabase
    .from("links")
    .select("*")
    .eq("shortLink", shortLink);

  if (error) throw new Error(error.message);

  if (!data || data.length === 0) {
    window.location.href = `${DOMAIN}/not-found`;
  } else {
    const fullUrl = data[0].longLink;
    const linkId = data[0].id;

    const userAgent = navigator.userAgent;
    const locationResponse = await fetch("https://freeipapi.com/api/json");
    const userData = await locationResponse.json();

    const { countryName } = userData;
    const userLocation = { country: countryName };

    trackClick(linkId, userAgent, userLocation);
    window.location.href = fullUrl;
  }
}

export async function searchAllLinksByUser(id, searchText = "") {
  const { data, error } = await supabase
    .from("links")
    .select()
    .ilike("title", `%${searchText}%`)
    .filter("createdBy", "eq", id)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}
