const nodemailer = require("nodemailer"); 


async function controll (req,res){
     try {
    const { name, email, title, budget, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Project: ${title}`,
      html: `
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }

}
module.exports = controll