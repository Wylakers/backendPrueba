import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/Prearmado-Producto.controller.js";

const router = Router();

router.get("/prearmado-producto", getAll);
router.post("/prearmado-producto", create);
router.put("/prearmado-producto/:id", update);
router.delete("/prearmado-producto/:id", remove);
router.get("/prearmado-producto/:id", getOne);

export default router;
