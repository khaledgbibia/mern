const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const TodoRouter = require("./Routes/todoRoutes");
const cors = require("cors");
mongoose.set("strictQuery", false);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
mongoose.connect(process.env.DB_URL).then(console.log("DB Connected"));

const PORT = process.env.PORT || 4000;

app.use("/api", TodoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
