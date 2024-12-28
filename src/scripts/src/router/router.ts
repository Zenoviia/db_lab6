"use strict";

import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();

router.post("/users", UserController.create);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

export default router;
