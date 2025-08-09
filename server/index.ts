import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  handleSignup,
  handleLogin,
  handleDeposit,
  handleWithdraw,
  handleGetAllData,
} from "./routes/auth";
<<<<<<< HEAD
=======
import {
  handleSendMessage,
  handleSendBroadcast,
  handleGetUserMessages,
  handleMarkMessageRead,
  handleGetUnreadCount,
} from "./routes/messages";
>>>>>>> 80d9eb1062028fd1da649027b2f900235dea54f6

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Authentication routes
  app.post("/api/auth/signup", handleSignup);
  app.post("/api/auth/login", handleLogin);

  // Transaction routes
  app.post("/api/deposit", handleDeposit);
  app.post("/api/withdraw", handleWithdraw);

  // Admin route to view all data
  app.get("/api/admin/data", handleGetAllData);

  return app;
}
