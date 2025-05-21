import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function sanitize(input) {
  return input.replace(/[<>]/g, "");
}

export async function POST(request) {
  try {
    const { email, message } = await request.json();

    if (!email ||!message || typeof email !== "string" || typeof message !== "string") 
      {
      return NextResponse.json(
        { success: false, message: "Invalid input data" },
        { status: 400 }
      );
    }

    const senderEmail = sanitize(email.trim());
    const userMessage = sanitize(message.trim());

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abhi.kumar252004@gmail.com",
        pass: "qqtlbukpzexmsjcd", // Gmail app password here
      },
    });

    const mailOptions = {
      from: "abhi.kumar252004@gmail.com",  // Yaha aapka authenticated Gmail address hona chahiye
      to: "sarkitshala@gmail.com",
      replyTo: senderEmail,  // User ka email jahan reply jaye
      subject: "New Message from Website Contact Form",
      text: `You have received a new message from ${senderEmail}:\n\n${userMessage}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
