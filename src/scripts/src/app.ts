"use strict";

import express from "express";
import "dotenv/config";
import connectToDatabase from "./conectionDataBase/connectingDb";
import router from "./router/router";

const PORT = Number(process.env.PORT);
const HOST = process.env.HOST;
const app = express();

app.use(express.json());
app.use("/api", router);

const startApp = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on http://${HOST}:${PORT}`);
    });
  } catch (err: any) {
    console.log("Error start server:", err.message);
  }
};

startApp();
