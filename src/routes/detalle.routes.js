import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/Detalle.controller.js";

const router = Router();

router.get("/detalle-usuarios", getAll);
router.post("/detalle-usuarios", create);
router.put("/detalle-usuarios/:id", update);
router.delete("/detalle-usuarios/:id", remove);
router.get("/detalle-usuarios/:id", getOne);

export default router;
