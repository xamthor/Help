import { Router } from "express";
import statusController from "../controllers/status.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";

const { create, latest, all } = statusController;
const { authenticate } = authentication;

const testRouter = Router();

testRouter.get("/all", authenticate, catchAsync(all));
testRouter.post("/create", authenticate, catchAsync(create));
testRouter.get("/latest", authenticate, catchAsync(latest));

export default testRouter;