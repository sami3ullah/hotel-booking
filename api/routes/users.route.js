import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
  getAllUsers,
} from "../controllers/user.controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// token verification
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("You're logged in");
// });

router.get("/", verifyAdmin, getAllUsers);
router.get("/:id", verifyUser, getUser);
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);

export default router;
