import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from 'next/server';
export async function POST(request) {
  try {
  let body=await request.json();
  console.log(body.one,body.two)
   return NextResponse.json('chal hya');
  } catch (err) {
    console.error("Failed to send email:", err);
    return  NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
