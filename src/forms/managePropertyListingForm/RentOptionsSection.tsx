import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { rentOptions } from "@/config/typeOfPropertyOptions";
import { ListingPropertyFormData } from "@/zod";
import { useFormContext } from "react-hook-form";

function RentOptionsSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ListingPropertyFormData>();

  return (
    <div className="grid md:grid-cols-3 gap-4 mt-8">
      {rentOptions.map((item, index) => {
        return (
          <Label key={index} className="flex flex-col gap-2">
            <span>{item.optionName}</span>
            <Input
              placeholder={item.placeholder}
              type={item.type}
              {...register(
                `${item.registerKey as keyof ListingPropertyFormData}`
              )}
            />

            {errors?.[item.registerKey as keyof ListingPropertyFormData] && (
              <p className="text-red-500 text-sm">
                {
                  errors?.[item.registerKey as keyof ListingPropertyFormData]
                    ?.message as string
                }
              </p>
            )}
          </Label>
        );
      })}
      <Separator />
    </div>
  );
}

export default RentOptionsSection;
