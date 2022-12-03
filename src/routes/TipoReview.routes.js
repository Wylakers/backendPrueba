import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/TipoReview.controller.js";

const router = Router();

router.get("/tipo-review", getAll);
router.post("/tipo-review", create);
router.put("/tipo-review/:id", update);
router.delete("/tipo-review/:id", remove);
router.get("/tipo-review/:id", getOne);

export default router;
