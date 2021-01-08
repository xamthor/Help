import { Router } from "express";
import searchController from "../controllers/search.controller";
import catchAsync from "../middleware/catchAsync";
import authentication from "../middleware/authenticate";

const { search } = searchController;
const { authenticate } = authentication;

const searchRouter = Router();

searchRouter.get("/search", authenticate, catchAsync(search));

export default searchRouter;