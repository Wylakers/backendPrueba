import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/Review.controller.js";

const router = Router();

router.get("/review", getAll);
router.post("/review", create);
router.put("/review/:id", update);
router.delete("/review/:id", remove);
router.get("/review/:id", getOne);

export default router;
