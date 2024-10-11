import { useQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { validateToken } from "@/api/userApi";
import { useEffect } from "react";
import toast from "react-hot-toast";

// Define UserState interface for Zustand
interface UserState {
  isLoggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
}

// Create Zustand store with persistence (localStorage)
const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setLoggedIn: (status: boolean) => set({ isLoggedIn: status }),
    }),
    {
      name: "user-storage", // localStorage key
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    }
  )
);
export const useAuth = () => {
  const { isLoggedIn, setLoggedIn } = useUserStore();

  const { isSuccess, isError } = useQuery({
    queryKey: ["validateToken"],
    queryFn: validateToken,
    retry: false
  });

  useEffect(() => {
    if (isSuccess && !isLoggedIn) {
      toast.success("Logged In", {
        icon: "✔️",
      });
      setLoggedIn(true);
    } else if (isError && isLoggedIn) {
      setLoggedIn(false);
      toast.error("Logged Out");
    }
    // setCheckedLogin(true); // Mark as checked to prevent re-validation
  }, [isSuccess, isError, isLoggedIn, setLoggedIn]);

  return { isLoggedIn };
};
