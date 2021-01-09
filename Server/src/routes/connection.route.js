import { Router } from "express";
import connectionController from "../controllers/connection.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";

const { create, all, topfive, add, remove } = connectionController;
const { authenticate } = authentication;

const connectionRouter = Router();

connectionRouter.post("/create", authenticate, catchAsync(create));
connectionRouter.get("/all", authenticate, catchAsync(all));
connectionRouter.get("/topfive", authenticate, catchAsync(topfive));
connectionRouter.post("/topfive/add", authenticate, catchAsync(add));
connectionRouter.post("/topfive/remove", authenticate, catchAsync(remove));

export default connectionRouter;