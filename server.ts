import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY || "");

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Product Search / Advice using Gemini
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, products } = req.body;
      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = `You are an expert dermatological consultant for Bioxcin. 
      Based on the following products: ${JSON.stringify(products)}, 
      answer the user's question: "${message}". 
      Keep it professional, helpful, and concise. Recommend specific Bioxcin products if applicable.`;

      const result = await model.generateContent(prompt);
      const responseText = result.response.text();
      res.json({ text: responseText });
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to get AI response" });
    }
  });

  // API Route: Mock Checkout
  app.post("/api/checkout", (req, res) => {
    const { items, total } = req.body;
    // Simulate order processing
    res.json({ 
      success: true, 
      orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
      message: "Order placed successfully!" 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
