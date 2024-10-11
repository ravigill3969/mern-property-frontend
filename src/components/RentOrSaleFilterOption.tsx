import { rentOrSaleOption } from "@/config/allFiltersOption";
import { useState } from "react";
import { Separator } from "./ui/separator";

function RentOrSaleFilterOption() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <h2 className="font-bold ">Type:</h2>
      <div className="flex gap-4 mt-1">
        {rentOrSaleOption.map((item, index) => {
          return (
            <div key={index}>
              <input
                type={item.type}
                value={item.title}
                checked={item.title === selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {item.title}
            </div>
          );
        })}
      </div>
      <Separator className="mt-2"/> 
    </div>
  );
}

export default RentOrSaleFilterOption;
