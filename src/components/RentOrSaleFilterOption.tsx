import { rentOrSaleOption } from "@/config/allFiltersOption";
import { Separator } from "./ui/separator";


type RentOrSaleFilterOptionProps = {
  setType: (type: "rent" | "sale") => void;
  type: "rent" | "sale";

};

function RentOrSaleFilterOption({
  setType,
  type,
}: RentOrSaleFilterOptionProps) {
  return (
    <div>
      <h2 className="font-bold flex gap-3 mt-3">Type:</h2>
      <div className="flex gap-4 mt-1">
        {rentOrSaleOption.map((item, index) => {
          return (
            <div key={index}>
              <input
                type={item.type}
                value={item.title}
                checked={item.title === type}
                onChange={(e) => setType(e.target.value as "rent" | "sale")}
              />
              {item.title}
            </div>
          );
        })}
      </div>
      <Separator className="mt-2" />
    </div>
  );
}

export default RentOrSaleFilterOption;
