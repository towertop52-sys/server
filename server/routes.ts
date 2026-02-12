
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Contact Form
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);

      // 1. Send the email automatically
      await sendContactEmail(input);

      // 2. We skip database storage to satisfy the requirement:
      // "Ensure no user data is stored beyond sending the email."
      // const message = await storage.createContactMessage(input);

      res.status(201).json({ success: true, message: "Email delivered successfully" });
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: err.message || "Internal server error" });
    }
  });

  // Reviews
  app.get(api.reviews.list.path, async (req, res) => {
    const reviews = await storage.getReviews();
    res.json(reviews);
  });

  app.post(api.reviews.create.path, async (req, res) => {
    try {
      const input = api.reviews.create.input.parse(req.body);
      const review = await storage.createReview(input);
      res.status(201).json(review);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}

// Seed function (optional)
async function seedDatabase() {
  // Add seed data if needed
}
