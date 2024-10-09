// import { ListingPropertyFormData } from "@/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const BASEURL = import.meta.env.VITE_BACKEND_BASE_URL;

export const useCreateMyListing = () => {
  const createMyListingRequest = async (listingFormData: FormData) => {
    const response = await fetch(`${BASEURL}/api/listing`, {
      method: "POST",
      credentials: "include",
      
      body: listingFormData,
    });

    if (!response.ok) {
      throw new Error("Failed to create listing");
    }

    return response.json();
  };

  const {
    mutate: createListing,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: createMyListingRequest,
  });

  if (isSuccess) {
    toast.success("Listing created!");
  }

  if (error) {
    toast.error("Unable to add Listing");
  }

  return { createListing, isPending };
};
