import { rentOptions } from "@/config/allFiltersOption";
import { Label } from "./ui/label";

function RentOptionsFilter() {
  return (
    <div className="flex flex-col my-3">
      <h2 className="font-bold mb-2">Rent Options</h2>
      {rentOptions.map((item, index) => {
        return (
          <div key={index} className="text-lg ">
            <input
              type={item.type}
              className={`mr-3 border-2 my-1 ${item.classNameForInput}`}
              placeholder={item.placeholder}
            />
            <Label className={`${item.className}`}>{item.title}</Label>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default RentOptionsFilter;
