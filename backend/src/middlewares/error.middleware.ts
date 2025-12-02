import { Request, Response, NextFunction } from "express";

function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message || "internal server error",
  });
}

export default {
  errorHandler,
};
