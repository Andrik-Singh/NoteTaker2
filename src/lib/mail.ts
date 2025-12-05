import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "andriksingh78@gmail.com",
    pass: process.env.EMAIL_PASSWORD!,
  },
});
export async function sendMail(to: string, subject: string, html: string) {
  transporter.sendMail({
    from: "andriksingh78@gmail.com",
    to,
    subject,
    html,
  },(error)=>{
    console.error(error)
  });
}
