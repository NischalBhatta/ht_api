import express from "express";
import {
  deleteHabit,
  getHabit,
  insertHabit,
  updateHabit,
} from "../controllers/habitController.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const response = await insertHabit(req.body);

    res.json({
      status: "success",
      message: "Habit created",
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
    const response = await getHabit();
    console.log(response);

    res.json({
      status: "success",
      message: "Habit list",
      data: response,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.patch("/", async (req, res) => {
  try {
    console.log(req.body);
    const { _id, ...rest } = req.body;
    const response = await updateHabit(_id, rest);
    res.json({
      status: "success",
      message: "updated habit",
      data: req.body,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body;
    const response = await deleteHabit(id);
    res.json({
      status: "success",
      message: "Delete habit",
      data: req.body,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
