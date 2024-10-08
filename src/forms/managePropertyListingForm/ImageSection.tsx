import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ListingPropertyFormData } from "@/zod";
import { TriangleAlert } from "lucide-react";
import { useFormContext } from "react-hook-form";

function ImageSection() {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<ListingPropertyFormData>();

  console.log(watch().images);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length > 6) {
      e.target.value = ""; // Reset the input if more than 6 files are selected
      setValue("images", []); // Set the selected files to form state as an array

      alert("You can only upload a maximum of 6 images.");
      return;
    }
    setValue("images", files); // Set the selected files to form state as an array
  };

  return (
    <div className="mt-7">
      <h1 className="font-bold text-3xl my-3 ">
        Image Upload
        <span className="text-sm font-semibold"> (Max 6)</span>
      </h1>
      <Label>
        <Input
          type="file"
          accept=".jpg, .jpeg, .png"
          multiple
          onChange={handleFileChange}
        />{" "}
        {errors.images && (
          <p className="text-sm text-red-500 font-bold flex items-center gap-1 mt-1">
            <TriangleAlert size={18} /> {errors.images.message}
          </p>
        )}
      </Label>
    </div>
  );
}

export default ImageSection;
