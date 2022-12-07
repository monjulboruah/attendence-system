require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDb = require("./config/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json({ msg: "Its working........." });
});
// app.use("/user", require("./routes/userRoutes"));
// app.use("/zone", require("./routes/zoneRoutes"));
// app.use("/incident", require("./routes/incidentRoutes"));
// app.use("/upload", require("./routes/productClassificationRoute"));

const PORT = process.env.PORT || 5001;
console.log(process.env);

connectDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Listenting on port ${PORT}...`));
  })
  .catch((err) => {
    console.log(err);
  });
