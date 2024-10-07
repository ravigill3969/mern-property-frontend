import { useQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { validateToken } from "@/api/userApi";
import { useEffect, useState } from "react";
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

// useAuth hook to validate user authentication
export const useAuth = () => {
  const { isLoggedIn, setLoggedIn } = useUserStore();
  const [checkedLogin, setCheckedLogin] = useState(false); // State to track first check

  const { isSuccess, isError } = useQuery({
    queryKey: ["validateToken"],
    queryFn: validateToken,
    retry: false,
    enabled: !checkedLogin, // Prevent refetching once checked
  });

  useEffect(() => {
    if (isSuccess && !isLoggedIn) {
      toast.success("Logged In", {
        icon: "✔️",
      });
      setLoggedIn(true);
    } else if (isError && isLoggedIn) {
      setLoggedIn(false);
    }
    // Mark the login state as checked to prevent re-validation
    setCheckedLogin(true);
  }, [isSuccess, isError, isLoggedIn, setLoggedIn]);

  return { isLoggedIn };
};

export default useUserStore;
