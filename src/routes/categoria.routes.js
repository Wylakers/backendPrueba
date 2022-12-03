import { Router } from "express";

import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/Categoria.controller.js";

const router = Router();

router.get("/categoria", getAll);
router.post("/categoria", create);
router.put("/categoria/:id", update);
router.delete("/categoria/:id", remove);
router.get("/categoria/:id", getOne);

export default router;
