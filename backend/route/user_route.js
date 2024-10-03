import express from "express";
import { getUsersProfile, login, logout, signup } from "../controllers/user_controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getUsersProfile", secureRoute, getUsersProfile);

export default router;