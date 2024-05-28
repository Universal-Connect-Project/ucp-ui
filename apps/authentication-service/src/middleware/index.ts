import { Application } from "express";
import { errorHandler } from "./error.middleware";
import { notFoundHandler } from "./not-found.middleware";

export function initMiddleware(app: Application) {
  app.use(errorHandler);
  app.use(notFoundHandler);
}

export default initMiddleware;
