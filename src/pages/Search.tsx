import RentOrSaleFilterOption from "@/components/RentOrSaleFilterOption";
import { Separator } from "@/components/ui/separator";

function Search() {
  return (
    <div className="grid grid-cols-[1fr_4fr] min-h-screen p-2 gap-5">
      <div className="shadow-2xl p-4">
        <h1 className="font-bold text-lg">Apply Filters</h1>
        <Separator />
        <div className="mt-3">
          <RentOrSaleFilterOption />
        </div>
      </div>
      <div className="shadow-2xl">water</div>
    </div>
  );
}

export default Search;
