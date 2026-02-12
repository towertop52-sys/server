import nodemailer from 'nodemailer';

/**
 * Sends a contact email using Nodemailer.
 * This version includes strict type checks and validation for environment variables
 * to ensure it compiles correctly in a TypeScript environment.
 * 
 * @param to - Recipient email address
 * @param subject - Email subject
 * @param message - Email body content
 */
export async function sendContactEmail(to: string, subject: string, message: string): Promise<boolean> {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  // Verify environment variables are present to satisfy TypeScript strict mode
  if (!emailUser || !emailPass) {
    throw new Error('Environment variables EMAIL_USER or EMAIL_PASS are not defined.');
  }

  // Create transporter with validated strings
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to your preferred provider
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"Towertop Form" <${emailUser}>`,
    to: to,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    return true;
  } catch (error) {
    // Re-throw the error so the calling controller can handle the HTTP response
    console.error('Nodemailer error detected:', error);
    throw error;
  }
}