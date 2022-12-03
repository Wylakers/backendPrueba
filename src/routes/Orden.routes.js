import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/Orden.controller.js";

const router = Router();

router.get("/orden", getAll);
router.post("/orden", create);
router.put("/orden/:id", update);
router.delete("/orden/:id", remove);
router.get("/orden/:id", getOne);

export default router;
