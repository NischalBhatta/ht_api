import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
import express from "express";
import cors from "cors";
import { connectMongoDB } from "./src/config/dbConfig.js";
// import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8000;
connectMongoDB();

//Static serving
import path from "path";
const __dirname = path.resolve();

//Serve static files
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

import habitRouters from "./src/routers/habitRouters.js";
import completionRouters from "./src/routers/completionRouters.js";

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
