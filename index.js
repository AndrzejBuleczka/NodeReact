const express = require("express");
require('./services/passport');

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "again and again :D" });
});

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
