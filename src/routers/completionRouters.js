import express from "express";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});

export default router;
