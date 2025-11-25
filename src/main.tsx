import { createRoot } from "react-dom/client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import App from "./App.tsx";
import "./index.css";

// Check if Convex URL is configured
const convexUrl = import.meta.env.VITE_CONVEX_URL;
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

createRoot(document.getElementById("root")!).render(
  convex ? (
    <ConvexProvider client={convex}>
      <App />
    </ConvexProvider>
  ) : (
    <App />
  )
);
