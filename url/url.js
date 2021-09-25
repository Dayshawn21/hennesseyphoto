export const GRAPH_URL =
  process.env.NEXT_PUBLIC_GRAPH_URL || "http://localhost:1337/graphql";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const NEXT_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

export const fromImagetoUrl = (image) => {
  if (!image) {
    return "/vercel.svg";
  }

  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${images.url}`;
  }

  return image.url;
};
