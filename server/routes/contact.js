const express = require('express');
const router = express.Router();
const { Resend } = require('resend');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required.' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'bakkeshymr@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message'} from ${name}`,
      html: `
        <h3>New message from your portfolio!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ message: 'Failed to send email.' });
    }

    return res.json({ message: 'Email sent successfully!' });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;