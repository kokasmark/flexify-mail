const mail_template = require("./mail_template")
const mailer = require("./mail_service")
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bcrypt = require("bcrypt")

dotenv.config()


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(8000);

app.post('/api/mail', (req, res) => sendMail(req, res));


async function sendMail(req, res){
    let data = req.body
    if (!await compareHash(process.env.token, req.body.token)) return res.json({success: false})


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

async function compareHash(password, hash){
    return bcrypt.compare(password, hash).catch(err => this.log(1, err))
}




