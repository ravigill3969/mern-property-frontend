import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Instantiate the QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Disable retries in development to see errors instantly
      retry: false,
      // Ensure that data remains fresh but doesn't refetch automatically
      refetchOnWindowFocus: false,

      // Show errors immediately for easier debugging
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <Toaster position="top-right" />
  </StrictMode>
);
