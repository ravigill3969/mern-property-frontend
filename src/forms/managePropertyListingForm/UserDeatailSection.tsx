import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form"; // Use useFormContext to access the shared form methods
import { TriangleAlert } from "lucide-react";
import { ListingPropertyFormData } from "@/zod"; // Assuming you have the schema in another file
import { Separator } from "@/components/ui/separator";

function DeatailSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ListingPropertyFormData>();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold my-3">User profile</h1>
      <Label>
        Fullname
        <Input
          {...register("fullname")}
          placeholder="Ravisher Singh"
          className="border-green-600 mt-2 py-1 px-2 bg-slate"
        />
        {errors.fullname && (
          <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
            <TriangleAlert  size={18} /> {errors.fullname.message}
          </p>
        )}
      </Label>
      <div className="flex gap-3">
        <Label className="flex-1">
          Email
          <Input
            {...register("email")}
            placeholder="ravisher@email.com"
            className="border-green-600 mt-2 py-1 px-2 bg-slate"
          />
          {errors.email && (
            <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
              <TriangleAlert  size={18} /> {errors.email.message}
            </p>
          )}
        </Label>
        <Label className="flex-1">
          Phone Number
          <Input
            {...register("phoneNumber")}
            placeholder="+1 (999) 999 9999"
            className="border-green-600 mt-2 py-1 px-2 bg-slate"
          />
          {errors.phoneNumber && (
            <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
              <TriangleAlert size={18} /> {errors.phoneNumber.message}
            </p>
          )}
        </Label>
      </div>
      <Separator />
    </div>
  );
}

export default DeatailSection;
