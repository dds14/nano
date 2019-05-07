const nodemailer = require("nodemailer");

module.exports = {
  addContactForm: (req, res) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "nanoapp3@gmail.com",
        pass: "Coffee412!#"
      }
    });

    let mailOptions = {
      from: "Nano",
      to: "dereksams9@gmail.com",
      subject: "NODEMAILER",
      text: "Something Happened",
      html: "<b>Nodemail Sent!</b>"
    };

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Email Sent");
      }
    });
    res.sendStatus(200);
  }
};
