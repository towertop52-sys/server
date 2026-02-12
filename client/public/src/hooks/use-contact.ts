import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useState } from "react";
import { trackFormSubmit } from "@/lib/analytics";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export function useContactForm() {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: ""
    }
  });

  const mutate = async (data: InsertContactMessage) => {
    setIsPending(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error('EmailJS Service ID or Template ID is missing.');
      }

      // Explicitly map form data to EmailJS template variables
      const templateParams = {
        user_name: data.name,
        user_email: data.email,
        user_phone: data.phone, // Mapped as requested
        message: data.message,
        // Optional: Subject is often helpful in the email body or subject line
        subject: data.subject || 'New Contact Request'
      };

      // Use emailjs.send to send the explicitly mapped data
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (result.status !== 200) {
        throw new Error('Failed to send message via EmailJS');
      }

      // Track Success
      trackFormSubmit('Contact Form', 'success');

      setIsPending(false);
      alert("Message sent successfully!");
      form.reset();
    } catch (error: any) {
      // Track Error
      console.error('EmailJS Error:', error);
      trackFormSubmit('Contact Form', 'error');
      setIsPending(false);
      alert("Error: " + (error.text || error.message || "Something went wrong. Please try again."));
    }
  };

  return {
    form,
    mutation: {
      mutate,
      isPending
    }
  };
}
