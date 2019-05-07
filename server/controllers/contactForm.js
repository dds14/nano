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
      html: `<h2>You've got a contact form from Nano.</h2>
            <p>First Name: ${req.body.first_name}<p>
            <p>Last Name: ${req.body.last_name}<p>
            <p>Email: ${req.body.email}<p>
            <p>Message: ${req.body.message}<p>`
    };

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Email Sent");
      }
    });
    console.log(req.body);
    res.sendStatus(200);
  }
};
