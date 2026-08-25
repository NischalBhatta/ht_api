import express from "express";
import { connectMongoDB } from "./src/config/dbConfig.js";
// import cors from "cors";

const app = express();

const PORT = 8000;
connectMongoDB();

import habitRouters from "./src/routers/habitRouters.js";
import completionRouters from "./src/routers/completionRouters.js";

app.use(express.json());

app.use("/api/v1/habits", habitRouters);
app.use("/api/v1/completions", completionRouters);

// app.use("/", (req, res) => {
//   res.json({
//     status: "success",
//     message: "Do It",
//   });
// });

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
