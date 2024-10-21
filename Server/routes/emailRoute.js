const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

// OAuth2 Credentials
const CLIENT_ID = process.env.CLIENT_ID; 
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Function to send email
async function sendMail(emailDetails) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER, 
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emailDetails.to,
      subject: emailDetails.subject,
      text: emailDetails.text,
      html: emailDetails.html,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

// POST route to send an email
router.post('/send-email', async (req, res) => {
  const { name, to, subject, text, html } = req.body;

  // Include the user's name in the email text or HTML
  const emailText = `${name} has contacted you:\n\n${text}`;
  const emailHtml = `<p><strong>${name}</strong> has contacted you:</p><p>${html}</p>`;

  const emailDetails = {
    to: to,
    subject: subject,
    text: emailText,
    html: emailHtml,
  };

  try {
    await sendMail(emailDetails); // Call the sendMail function
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error: error.message });
  }
});

module.exports = router; 
