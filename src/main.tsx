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
      refetchOnReconnect: false,
      // Keep the data stale for a short time to encourage refetching on manual requests
      staleTime: 1000 * 60, // 1 minute
      // Show errors immediately for easier debugging
    },
    mutations: {
      // Disable retries for mutations in development
      retry: false,
      // Show errors immediately for easier debugging
      onError: (error) => {
        console.error("Error in mutation:", error);
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <Toaster position="top-right"/>
  </StrictMode>
);
