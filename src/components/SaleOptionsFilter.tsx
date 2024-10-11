import { saleOptions } from "@/config/allFiltersOption";
import { Label } from "./ui/label";

function SaleOptionsFilter() {
  return (
    <div className="flex flex-col my-3">
      <h2 className="font-bold mb-2">Sale Options</h2>
      {saleOptions.map((item, index) => {
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

export default SaleOptionsFilter;
