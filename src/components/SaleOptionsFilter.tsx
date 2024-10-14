import { saleOptions } from "@/config/allFiltersOption";
import { Label } from "./ui/label";

type SaleOptionsFilterProps = {
  setParkingAvailability: (parking: boolean) => void;
  setFurnished: (furnished: boolean) => void;
  setSalePrice: (price: number) => void;
  furnished: boolean;
  parking: boolean;
};

function SaleOptionsFilter({
  setFurnished,
  setParkingAvailability,
  setSalePrice,
  furnished,
  parking,
}: SaleOptionsFilterProps) {
  const handleChange = (
    itemTitle: string,
    type: string,
    value: string | boolean
  ) => {
    if (type === "checkbox") {
      if (itemTitle === "Parking") {
        setParkingAvailability(value as boolean);
      } else if (itemTitle === "Furnished") {
        setFurnished(value as boolean);
      }
    }

    if (type === "number") {
      setSalePrice(Number(value));
    }
  };

  return (
    <div className="flex flex-col my-3">
      <h2 className="font-bold mb-2">Sale Options</h2>
      {saleOptions.map((item, index) => (
        <div key={index} className="text-lg">
          <input
            type={item.type}
            className={`mr-3 border-2 my-1 ${item.classNameForInput}`}
            placeholder={item.placeholder}
            checked={
              item.title === "Parking"
                ? parking
                : item.title === "Furnished"
                ? furnished
                : undefined
            }
            onChange={(e) =>
              handleChange(
                item.title,
                item.type,
                item.type === "checkbox" ? e.target.checked : e.target.value
              )
            }
          />
          <Label className={`${item.className}`}>{item.title}</Label>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default SaleOptionsFilter;
