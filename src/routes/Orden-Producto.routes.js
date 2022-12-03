import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/Orden-Producto.controller.js";

const router = Router();

router.get("/orden-producto", getAll);
router.post("/orden-producto", create);
router.put("/orden-producto/:id", update);
router.delete("/orden-producto/:id", remove);
router.get("/orden-producto/:id", getOne);

export default router;
