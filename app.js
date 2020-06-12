const express = require("express");
require("express-async-errors");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(function (req, res) {
  res.render("404", { layout: false });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).render("500", { layout: false });
});

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
});
