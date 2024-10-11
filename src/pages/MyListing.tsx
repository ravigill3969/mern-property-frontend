import { useGetMyListing } from "@/api/listingApi";
import ListingCard from "@/components/ListingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function MyListing() {
  const { data, isLoading } = useGetMyListing();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-full">
        Loading...
      </div>
    );
  }

  if (!data && !isLoading) {
    return (
      <Link
        to={"/add-listing"}
        className="flex justify-center items-center min-h-full"
      >
        <p>You dont have any listings available.</p>
        <Button>Create Lisiting</Button>
      </Link>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {data?.map((item, index) => {
        return (
          <div
            className="shadow-lg p-4 transition-all duration-300 hover:scale-105 rounded-lg"
            key={index}
          >
            <ListingCard item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default MyListing;
