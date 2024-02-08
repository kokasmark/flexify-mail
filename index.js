var mail_template = require("./mail_template")
var mailer = require("./mail_service")
const options = {
    from: "Flexify Team <flexify.team2024@gmail.com>", // sender address
    to: result[0].email, // receiver email
    subject: "Reset Password Token - Flexify", // Subject line
    html: mail_template(result[0].username,token),
}
mailer(options, (info) => {
    console.log("Email sent successfully");
    console.log("MESSAGE ID: ", info.messageId);
});