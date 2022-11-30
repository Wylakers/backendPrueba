import { Router } from "express";

import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/producto.controller.js";

const router = Router();

router.get("/producto", getAll);
router.post("/producto", create);
router.put("/producto/:id", update);
router.delete("/producto/:id", remove);
router.get("/producto/:id", getOne);

export default router;
