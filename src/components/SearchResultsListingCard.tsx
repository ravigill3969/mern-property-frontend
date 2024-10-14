import { ISearchResponse } from "@/api/searchListingApi";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type Props = {
  searchResponse: ISearchResponse;
};

function SearchResultsListingCard({ searchResponse }: Props) {
  const data = searchResponse.results;
  return (
    <div className="grid md:grid-cols-3 gap-6 p-5 ">
      {data.map((item, i) => {
        return (
          <div
            className="flex border-2 gap-4 shadow-2xl rounded-2xl p-1"
            key={i}
          >
            <div className="flex flex-col justify-between">
              <img src={item.images[0]} width={100} />
              <Link to={`/details/${item._id}`}>
                <Button className="bg-green-600 hover:bg-green-500">
                  View
                </Button>
              </Link>
            </div>
            <div>
              <div>Owner: {item.fullname}</div>
              <div>Location : {item.addressLine1}</div>
              {item.addressLine2 && (
                <div>AddressLine2 : {item.addressLine2}</div>
              )}
              <div>City : {item.city}</div>
              <div>State : {item.state}</div>
              <div>Country : {item.country}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResultsListingCard;
