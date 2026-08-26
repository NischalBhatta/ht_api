import express from "express";
import { insertCompletion } from "../controllers/completionController.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const response = await insertCompletion(req.body);

    res.json({
      status: "success",
      message: "Completion route working",
      data: req.body,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
