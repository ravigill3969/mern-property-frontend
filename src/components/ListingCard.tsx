import { Trash2 } from "lucide-react";
import { ListingResponse } from "../responseTypes";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type Props = {
  item: ListingResponse;
};

function ListingCard({ item }: Props) {
  return (
    <div className="flex flex-col gap-4  ">
      <div className="object-cover">
        <img src={item.images[0]} />
      </div>
      <div className="flex justify-between min-w-28">
        <Link to={`/edit-listing/${item._id}`}>
          <Button className="shadow-lg bg-green-600 hover:bg-green-500">
            Edit
          </Button>
        </Link>
        <Button className="shadow-lg bg-red-600 hover:bg-red-500 outline-black">
          {" "}
          <Trash2 size={18} />
        </Button>
      </div>
    </div>
  );
}

export default ListingCard;
