import express from "express";

const app = express();

const PORT = 8000;

import taskRouters from "./src/routers/taskRouters.js";

app.use("/", (taskRouters) => {
  res.json({
    status: "success",
    message: "Do It",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
