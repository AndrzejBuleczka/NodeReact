const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./services/passport");
require('./models/User')

mongoose.connect(keys.mongoURI);

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "again and again :D" });
});

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
