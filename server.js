const nodemailer = require('nodemailer');
const fs = require('fs').promises; // Use the promisified version of fs
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.Email,
    pass: process.env.Pass,
  },
});

async function sendEmail() {
  try {
    // Read HTML content from file
    const htmlContent = await fs.readFile('./Template.html', 'utf8');
    console.log("process.env.Email",process.env.Email);
    console.log("process.env.Pass",process.env.Pass);
    const mailOptions = {
      from: process.env.Email,
      to: 'mdawarshamim@gmail.com',
      subject: 'Testing',
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();