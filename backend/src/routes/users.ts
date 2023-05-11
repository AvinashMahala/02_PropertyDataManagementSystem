import express from "express";
import * as UserController from "../controllers/users";
import { requiresAuth } from "../middleware/auth";


const router = express.Router();

router.get("/",requiresAuth,UserController.getAuthenticatedUser);
router.get("/all",requiresAuth,UserController.getUsers);

router.post("/signup",UserController.signUp);

router.post("/login", UserController.login);

router.post("/logout", UserController.logout);
router.delete("/:noteId",UserController.deleteUser);

export default router;