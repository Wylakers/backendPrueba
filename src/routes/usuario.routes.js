import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
  login,
} from "../controller/Usuario.controller.js";

const router = Router();

router.get("/usuario", getAll);
router.post("/usuario", create);
router.put("/usuario/:id", update);
router.delete("/usuario/:id", remove);
router.get("/usuario/:id", getOne);

//Login
router.post("/usuario/login", login);

export default router;
