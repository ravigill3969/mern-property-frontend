import { useSearch } from "@/api/searchListingApi";
import RentOptionsFilter from "@/components/RentOptionsFilter";
import RentOrSaleFilterOption from "@/components/RentOrSaleFilterOption";
import SaleOptionsFilter from "@/components/SaleOptionsFilter";
import SearchResultsListingCard from "@/components/SearchResultsListingCard";
import TypesOfPropertyOptions from "@/components/TypesOfPropertyOptions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSearchContext } from "@/context/SearchContext";
import { useEffect, useState } from "react";

export type SearchState = {
  page: number;
  type: "rent" | "sale";
  rentPrice: number;
  parking: boolean;
  furnished: boolean;
  utilities: boolean;
  moveInDate: Date;
  salePrice: number;
  destination: string;
  typeOfProperty:
    | "Apartment"
    | "House"
    | "Condominium"
    | "Commercial Property"
    | "Land"
    | "Office Space";
};

function Search() {
  const search = useSearchContext();
  const [searchState, setSearchState] = useState<SearchState>({
    page: 1,
    type: "rent",
    rentPrice: 0,
    parking: false,
    furnished: false,
    utilities: false,
    moveInDate: new Date(),
    salePrice: 0,
    typeOfProperty: "Apartment",
    destination: search.destination,
  });

  const setSalePrice = (salePrice: number) => {
    setSearchState((prev) => ({
      ...prev,
      page: 1,
      salePrice,
    }));
  };

  const setType = (type: "rent" | "sale") => {
    setSearchState((prev) => ({
      ...prev,
      page: 1,
      type: type,
    }));
  };

  const setRent = (rentPrice: number) => {
    setSearchState((prev) => ({
      ...prev,
      page: 1,
      rentPrice,
    }));
  };

  const setParkingAvailability = (parking: boolean) => {
    setSearchState((prev) => ({
      ...prev,
      page: 1,
      parking,
    }));
  };

  const setFurnished = (furnished: boolean) => {
    setSearchState((prev) => ({
      ...prev,
      page: 1,
      furnished,
    }));
  };

  const setUtilities = (utilities: boolean) => {
    setSearchState((prev) => ({
      ...prev,
      page: 1,
      utilities,
    }));
  };

  const setMoveInDate = (date: Date) => {
    setSearchState((prev) => ({
      ...prev,
      page: 1,
      date,
    }));
  };

  const setTypeOfProperty = (
    typeOfProperty:
      | "Apartment"
      | "House"
      | "Condominium"
      | "Commercial Property"
      | "Land"
      | "Office Space"
  ) => {
    setSearchState((prev) => ({
      ...prev,
      page: 1,
      typeOfProperty,
    }));
  };

  const [isSearchEnabled, setIsSearchEnabled] = useState(false);

  const { results, isLoading, error } = useSearch(searchState, isSearchEnabled);

  if (error) {
     return <div>smth went wrong</div>
  }

  const handleSubmit = () => {
    setIsSearchEnabled(true); // Enable the search on button click
  };

  useEffect(() => {
    if (!isLoading && isSearchEnabled) {
      setIsSearchEnabled(false); // Reset after fetching results
    }
  }, [isLoading, isSearchEnabled]);

  return (
    <div className="grid grid-cols-[1fr_3fr] h-screen  p-2 gap-3 ">
      <div className="shadow-2xl p-4 overflow-y-scroll scrollbar h-[80%] bg-slate-50 rounded-lg">
        <h1 className="font-bold text-lg">Apply Filters</h1>
        <Separator />
        <div className="flex flex-col gap-2">
          <RentOrSaleFilterOption type={searchState.type} setType={setType} />
          {searchState.type === "rent" ? (
            <RentOptionsFilter
              setRent={setRent}
              setParkingAvailability={setParkingAvailability}
              setFurnished={setFurnished}
              setUtilities={setUtilities}
              setMoveInDate={setMoveInDate}
              furnished={searchState.furnished}
              utilities={searchState.utilities}
              parking={searchState.parking}
            />
          ) : (
            <SaleOptionsFilter
              setParkingAvailability={setParkingAvailability}
              setFurnished={setFurnished}
              setSalePrice={setSalePrice}
              furnished={searchState.furnished}
              parking={searchState.parking}
            />
          )}

          <TypesOfPropertyOptions
            setTypeOfProperty={setTypeOfProperty}
            type={searchState.typeOfProperty}
          />
          <Button onClick={handleSubmit} disabled={isLoading}>
            Apply
          </Button>
        </div>
      </div>
      <div className="bg-slate-50 shadow-2xl rounded-lg overflow-y-scroll h-[] scrollbar">
        {isLoading && <div>Loading</div>}
        {!results ? (
          <div>No data found</div>
        ) : (
          <SearchResultsListingCard searchResponse={results} />
        )}
      </div>
    </div>
  );
}

export default Search;
