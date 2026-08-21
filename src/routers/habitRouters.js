import express from "express";
import { getHabit, insertHabit } from "../controllers/habitController.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const response = await insertHabit(req.body);
  } catch (error) {
    console.log(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const response = await getHabit();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

export default router;
