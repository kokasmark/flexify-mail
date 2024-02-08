const mail_template = require("./mail_template")
const mailer = require("./mail_service")
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(8000, "https://mail-flexify.koyeb.app/");

app.post('/api/mail', (req, res) => sendMail(req, res));


function sendMail(req, res){
    let data = req.body
    const options = {
        from: "Flexify Team <flexify.team2024@gmail.com>", // sender address
        to: data.email, // receiver email
        subject: "Reset Password Token - Flexify", // Subject line
        html: mail_template(data.username,data.token),
    }
    mailer(options, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
    });

    res.json({success: true})
}



