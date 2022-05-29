import express from "express";

const router = express.Router();

// POST
router.post("/", (req, res) => {});
// UPDATE

// DELETE

// GET
router.get("/", (req, res) => {
  res.send("This is from auth");
});

// GET ALL

export default router;
