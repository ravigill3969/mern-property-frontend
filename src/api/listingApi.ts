// import { ListingPropertyFormData } from "@/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  ListingResponse,
  ListingsResponse,
} from "../../../backend/src/responseTypes";

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

export const useGetMyListing = () => {
  const getMyListingRequest = async (): Promise<ListingsResponse> => {
    const response = await fetch(`${BASEURL}/api/listing`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to create listing");
    }

    return response.json();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getMyListingRequest"],
    queryFn: getMyListingRequest,
  });
  return { data, isLoading };
};

export const useUpdateMyListing = (listingId: string) => {
  const updateMyListing = async (data: FormData) => {
    const response = await fetch(`${BASEURL}/api/listing/${listingId} `, {
      credentials: "include",
      method: "PUT",
      body: data,
    });

    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error(responseBody.message);
    }

    return responseBody;
  };

  const {
    mutate: updateListing,
    error,
    isPending,
  } = useMutation({
    mutationFn: updateMyListing,
    onSuccess: () => {
      toast.success("upadated");
    },
  });

  if (error) {
    toast.error(error.message);
  }

  return { updateListing, isPending };
};
export const useGetMySingleListing = (listingId: string) => {
  const getMySingleListing = async (): Promise<ListingResponse> => {
    const response = await fetch(`${BASEURL}/api/listing/${listingId}`, {
      method: "GET",
    });

    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error(responseBody.message);
    }

    return responseBody;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getMySingleListing", listingId], // Add listingId to queryKey
    queryFn: getMySingleListing,
    enabled: !!listingId,
    retry:false
  });

  return { data, isLoading };
};
