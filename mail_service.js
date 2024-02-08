var nodemailer = require("nodemailer")
const dotenv = require('dotenv');
dotenv.config();

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});
async function SENDMAIL(mailDetails, callback){
    try {
      const info = await transporter.sendMail(mailDetails)
      callback(info);
    } catch (error) {
      console.log(error);
    } 
  };
  module.exports = SENDMAIL;

