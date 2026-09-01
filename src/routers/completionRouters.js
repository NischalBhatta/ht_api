import express from "express";
import {
  deleteCompletion,
  getCompletions,
  insertCompletion,
} from "../controllers/completionController.js";

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
    const response = await getCompletions(req.query.habitId);
    console.log(response);
    res.json({
      status: "success",
      message: "Completion List",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", async (req, res) => {
  console.log("DELETE BODY:", req.body);

  try {
    const { _id } = req.body;

    if (!_id) {
      throw new Error("No _id provided in request body");
    }

    const response = await deleteCompletion(_id);

    res.json({
      status: "success",
      message: "Completion deleted",
      deleted: response,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
