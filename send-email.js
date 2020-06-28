const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "webtintuc.ltweb2@gmail.com",
    pass: "doancuoiky",
  },
});

transporter
  .sendMail({
    from: "webtintuc.ltweb2@gmail.com",
    to: "vdlong2009@gmail.com",
    subject: "hello",
    text: "Hello World?",
  })
  .then(console.log)
  .catch(console.error);
