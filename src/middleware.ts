import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  // Allow only the homepage
  if (context.url.pathname !== "/") {
    return context.redirect("/");
  }

  return next();
});