import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

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

export default router;
