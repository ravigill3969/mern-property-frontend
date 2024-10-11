import RentOrSaleFilterOption from "@/components/RentOrSaleFilterOption";
import TypesOfPropertyOptions from "@/components/TypesOfPropertyOptions";
import { Separator } from "@/components/ui/separator";

function Search() {
  return (
    <div className="grid grid-cols-[1fr_3fr] h-screen  p-2 gap-3 ">
      <div className="shadow-2xl p-4 overflow-y-scroll scrollbar h-[70%] bg-slate-50 rounded-lg">
        <h1 className="font-bold text-lg">Apply Filters</h1>
        <Separator />
        <div className="flex flex-col gap-2">
          <RentOrSaleFilterOption />
          <TypesOfPropertyOptions />
        </div>
      </div>
      <div className="bg-slate-50 shadow-2xl rounded-lg overflow-y-scroll h-[] scrollbar">
      water

      </div>
    </div>
  );
}

export default Search;
