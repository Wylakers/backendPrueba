import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/Reporte.controller.js";

const router = Router();

router.get("/reporte", getAll);
router.post("/reporte", create);
router.put("/reporte/:id", update);
router.delete("/reporte/:id", remove);
router.get("/reporte/:id", getOne);

export default router;
