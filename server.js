const express = require("express")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")

require("dotenv").config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const PORT = process.env.PORT || 8080

const app = express() 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))

app.post("/email", (req, res) => {

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `From: ${req.body.email}, ${req.body.subject}`,
        html: `
            <p><strong>From: </strong>${req.body.name}, ${req.body.email}</p> 
            <p><strong>Subject: </strong>${req.body.subject}</p>
            <p><strong>Message: </strong>${req.body.message}</p>
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });

    res.send("Email has been sent.")

})

app.listen(PORT, () => {
    console.log("The server is listening on port: " + PORT)
})