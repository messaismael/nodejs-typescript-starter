import express, { Request } from "express";
import cors from "cors";

import { router as Router } from "./routes"
import { PORT } from "./config";
import { connectDB } from "./lib/db";

// initialize db
connectDB();

const app = express();

const port = PORT;

app.use(cors()); // Enable all cors requests for all routes

app.use(express.urlencoded({ limit: '50000mb', extended: false }));

// user route for all path
app.use(Router);

app.get("/", (req: Request, res) => {
  res.status(200).json({
    success: true,
    message: 'NodeJS TypeScript starter is ready!!'
  });
});

app.get("*", (req: Request, res) => {
  res.status(404).send("Resource Not Found");
});

app.listen(port, () => {
  console.log(`Server is listening on port${port}\nYou can access via http://localhost:${port}/`);
});