import { NextFunction, Request, Response, Router } from "express";
import { success } from "../../middlewares/response.middleware";
import { all } from "./incidents.service";

const route = Router();

route.get(`/`, (req: Request, res: Response, next: NextFunction) => {
  return all().then(success(res)).catch(next);
});

export default route;
