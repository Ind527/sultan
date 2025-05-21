
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false,
          message: 'Name, email, and message are required' 
        });
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: 'Please provide a valid email address'
        });
      }

      // Log the submission for now
      console.log('Contact form submission:', { name, email, company, message });
      
      return res.status(200).json({ 
        success: true, 
        message: 'Your message has been received. We will contact you shortly!' 
      });
    } catch (error) {
      console.error('Error handling contact form:', error);
      return res.status(500).json({ 
        success: false,
        message: 'Internal server error'
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  const httpServer = createServer(app);
  return httpServer;
}
