const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

router.get("/register", function (req, res) {
  res.render("vwAccount/SignUp");
});
router.post("/register")[
  (body("email")
    .isEmail()
    .normalizeEmail()
    .custom(async function (email) {
      const found = await User.singleByEmail(email);
      if (!found) {
        throw Error("Email đả tồn tại");
      }
      return true;
    }),
  body("name").trim().notEmpty(),
  body("password").isLength({ min: 6 }))
],
  asyncHandler(async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(422)
        .render("vwAccount/SignUp", { errors: errors.array() });
    }
  });

module.exports = router;
