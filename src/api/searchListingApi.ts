import { SearchState } from "@/pages/Search";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const useSearch = (searchState: SearchState, enabled: boolean) => {
  const params = new URLSearchParams();

  // Set common parameters
  params.set("parking", String(searchState.parking));
  params.set("typeOfProperty", searchState.typeOfProperty);
  params.set("page", String(searchState.page));

  // Set type-specific parameters
  if (searchState.type === "rent") {
    params.set("type", searchState.type);
    params.set("utilities", String(searchState.utilities));
    params.set("rentPrice", String(searchState.rentPrice));
  }

  if (searchState.type === "sale") {
    params.set("type", searchState.type);
    params.set("salePrice", String(searchState.salePrice));
  }

  const searchRequest = async () => {
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
