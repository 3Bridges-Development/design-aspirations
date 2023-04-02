const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

require('dotenv').config();
const sendGrid = require('@sendgrid/mail');
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const transporter = nodemailer.createTransport(sendGridTransport({
  auth:{
    api_key:process.env.SENDGRID_API_KEY
  }
}))

app.post('/send', (req, res) => {
    // heplful article for how to use sendgrid with NodeJS and nodemailer: https://medium.com/swlh/send-email-with-node-js-from-react-website-using-nodemailer-and-sendgrid-2d2e54545a1a
    // this needs to be changed to correct business email after the email is verified
    const verifiedEmail = '3bridgesdev@gmail.com'
    const { name, email, message, phone } = req.body
    transporter.sendMail({
        to: verifiedEmail,
        cc: `${email}`,
        from: verifiedEmail,
        subject: `${name} - Designed Aspirations Contact Request`,
        html:`<h3>${name}</h3>
        <p>${message}</p>
        <p>Contact Info: ${name}, ${phone}, ${email}</p>`
        })
        .then(resp => {
            res.json({resp})
        })
        .catch((error) => {
            console.error(error)
        })
})

app.listen(port,()=>{
    console.log("server is running on", port || 3000)
})