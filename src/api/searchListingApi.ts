import { SearchState } from "@/pages/Search";
import { useQuery } from "@tanstack/react-query";

// Define the type for individual listing

interface IListing {
  _id: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  propertyType: string;
  rentOrSale: "rent" | "sale"; // Assuming these are the only two options
  monthlyRent?: string; // Optional if property is for sale
  securityDeposit: string;
  leaseTerms: string;
  moveInDate: string; // You might want to consider using Date type if processing dates
  propertySize: string; // You could also use number if you parse this to an integer/float
  numberOfBedrooms: string; // Consider using number if applicable
  numberOfBathrooms: string; // Consider using number if applicable
  furnishedStatus: string; // Define this based on possible values
  parkingAvailability: boolean;
  utilitiesIncluded: boolean;
  petPolicy: string; // You might want to define a more specific type here
  nearbyFacilities: string[]; // Array of strings
  askingPrice?: string; // Optional if property is for rent
  hoaFees?: string; // Optional if property is for rent
  propertyTaxes?: string; // Optional if property is for rent
  legalClearances?: string; // Optional if property is for rent
  mortgageAssistance: boolean;
  images: string[]; // Array of image objects or strings
  userId: string;
  createdAt: string; // You might want to consider using Date type
  updatedAt: string; // You might want to consider using Date type
  __v: number; // Version key from MongoDB
}

// Define the type for the response
export interface ISearchResponse {
  results: IListing[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const useSearch = (searchState: SearchState, enabled: boolean) => {
  const params = new URLSearchParams();
  // Set common parameters
  params.set("parkingAvailability", String(searchState.parking));
  params.set("typeOfProperty", searchState.typeOfProperty);
  params.set("page", String(searchState.page));
  params.set("destination", searchState.destination);

  // Set type-specific parameters
  if (searchState.type === "rent") {
    params.set("type", searchState.type);
    params.set("utilitiesIncluded", String(searchState.utilities));
    params.set("rentPrice", String(searchState.rentPrice));
  }

  if (searchState.type === "sale") {
    params.set("type", searchState.type);
    params.set("salePrice", String(searchState.salePrice));
  }

  const searchRequest = async (): Promise<ISearchResponse> => {
    const response = await fetch(
      `${BASE_URL}/api/search/?${params.toString()}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch listing");
    }

    return response.json();
  };

  const {
    data: results,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["searchRequest", params.toString()], // Make the query key depend on params
    queryFn: searchRequest,
    enabled: enabled, // Use the enabled parameter to control query execution
  });

  return { results, isLoading, error }; // Consider returning error for better handling
};
