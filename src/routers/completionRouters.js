import express from "express";
import {
  deleteCompletion,
  getCompletions,
  insertCompletion,
} from "../controllers/completionController.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const response = await insertCompletion(req.body);

    res.json({
      status: "success",
      message: "Completion route working",
      data: response,
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
    const response = await getCompletions();
    console.log(response);
    res.json({
      status: "success",
      message: "Completion List",
      data: response,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await deleteCompletion(req.params.id);

    res.json({
      status: "success",
      message: "Completion deleted",
      data: deleted,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
