import crypto from "crypto";
import prisma from "../db/prismaClient.js";
import emailService from "../services/email.service.js";

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

function getOtpHtml(otp) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Verification</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
      }
      .container {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
      }
      .otp {
          font-size: 24px;
          font-weight: bold;
          color: #333;
      }
  </style>
</head>
<body>
  <div class="container">
      <h2>Your OTP Code</h2>
      <p class="otp">${otp}</p>
      <p>Please use this code to verify your email address.</p>
  </div>
</body>
</html>`;
}

async function createOtp(userId, email, otpHash) {
  return await prisma.oTP.create({
    data: {
      userId,
      email,
      otpHash,
    },
  });
}

async function otpHash(otp) {
  const otpHash = crypto
    .createHash("sha256")
    .update(otp.toString())
    .digest("hex");
  return otpHash;
}

async function findOtp(otpHash, email) {
  return prisma.oTP.findFirst({
    where: {
      otpHash,
      email,
    },
  });
}

async function deleteOtp(userId) {
  return prisma.oTP.deleteMany({
    where: { userId },
  });
}

async function updateUser(userId) {
  return prisma.user.update({
    where: { id: userId },
    data: { verified: true },
  });
}

async function sendOTP(userId, email) {
  const otp = generateOTP();
  const hashedOtp = await otpHash(otp);
  const html = getOtpHtml(otp);

  await createOtp(userId, email, hashedOtp);

  await emailService.sendEmail(
    email,
    "OTP Verification",
    `Your OTP code is ${otp}`,
    html,
  );
}

export default {
  generateOTP,
  getOtpHtml,
  otpHash,
  findOtp,
  deleteOtp,
  updateUser,
  createOtp,
  sendOTP,
};
