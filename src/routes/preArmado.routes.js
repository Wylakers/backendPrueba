import { Router } from "express";

import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/preArmado.controller.js";

const router = Router();

router.get("/pre-armado", getAll);
router.post("/pre-armado", create);
router.put("/pre-armado/:id", update);
router.delete("/pre-armado/:id", remove);
router.get("/pre-armado/:id", getOne);

export default router;
