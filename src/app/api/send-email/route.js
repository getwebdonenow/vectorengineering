import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, phone, company, service, message } = req.body;

    // Configure your email transporter (SMTP)
    const transporter = nodemailer.createTransport({
        host: "smtp.your-email-provider.com", // e.g., smtp.gmail.com
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER, // your email
            pass: process.env.EMAIL_PASS, // app password or SMTP password
        },
    });

    try {
        await transporter.sendMail({
            from: `"Vector Engineering Website" <${process.env.EMAIL_USER}>`,
            to: "info@vectorengineeringuae.com", // recipient email
            subject: `New Contact Form Submission: ${name}`,
            html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email" });
    }
}
