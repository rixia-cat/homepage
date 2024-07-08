import "server-only";
import { createClient } from "contentful";

const IS_PRODUCTION = process.env.CONTENTFUL_IS_PREVMODE === "true";
export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
  accessToken: (IS_PRODUCTION ? process.env.CONTENTFUL_DELIVERY_TOKEN : process.env.CONTENTFUL_PREVIEW_TOKEN) ?? "",
  host: IS_PRODUCTION ? "cdn.contentful.com" : "preview.contentful.com",
});
