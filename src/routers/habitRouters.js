import express from "express";
import { insertHabit } from "../controllers/habitController.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const response = await insertHabit(req.body);
  } catch (error) {
    console.log(error);
  }
});

export default router;
