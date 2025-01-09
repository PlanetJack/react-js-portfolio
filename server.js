// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const app = express();

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['POST', 'GET'],
//     allowedHeaders: ['Content-Type']
// }));
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'jackkim620@gmail.com',
//         pass: 'codi1234'
//     }
// });

// app.post('/send', (req, res) => {
//     const { first_name, last_name, email, message } = req.body;

//     const mailOptions = {
//         from: email,
//         to: 'jackkim620@gmail.com',
//         subject: 'New Contact Form Submission from your Portfolio',
//         text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nMessage: ${message}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send(error.toString());
//         }
//         res.status(200).send('Message sent successfully!');
//     });
// });

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });