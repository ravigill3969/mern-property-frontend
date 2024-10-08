import { FormProvider, useForm } from "react-hook-form";
import { ListingPropertyFormData, listingSchema } from "@/zod";
import DeatailSection from "./UserDeatailSection";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import AddressSection from "./AddressSection";
import TypeOfPropertSection from "./TypeOfPropertSection";
// import PropertyFacilitiesSection from "./PropertyFacilitiesSection";
import RentOrSaleSection from "./RentOrSaleSection";
import RentOptionsSection from "./RentOptionsSection";
import SaleOptionSection from "./SaleOptionSection";
import ImageSection from "./ImageSection";

function ManagePropertyListingForm() {
  const formMethods = useForm<ListingPropertyFormData>({
    resolver: zodResolver(listingSchema),
  });

  const { handleSubmit, watch } = formMethods;

  const onSubmit = (data: ListingPropertyFormData) => {
    const formData = new FormData();

    // Append each field from the form data to FormData
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("addressLine1", data.addressLine1);
    formData.append("addressLine2", data.addressLine2 || "");
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("country", data.country);
    formData.append("postalCode", data.postalCode);
    formData.append("propertyType", data.propertyType);
    formData.append("rentOrSale", data.rentOrSale);

    // Rent-specific fields (conditionally append if the type is rent)
    if (data.rentOrSale === "rent") {
      formData.append("monthlyRent", data.monthlyRent || "");
      formData.append("securityDeposit", data.securityDeposit || "");
      formData.append("leaseTerms", data.leaseTerms || "");
      formData.append("moveInDate", data.moveInDate || "");
    }

    // Sale-specific fields (conditionally append if the type is sale)
    if (data.rentOrSale === "sale") {
      formData.append("askingPrice", data.askingPrice || "");
      formData.append("hoaFees", data.hoaFees || "");
      formData.append("propertyTaxes", data.propertyTaxes || "");
      formData.append("legalClearances", data.legalClearances || "");
    }

    // Common fields
    formData.append("propertySize", data.propertySize);
    formData.append("numberOfBedrooms", data.numberOfBedrooms);
    formData.append("numberOfBathrooms", data.numberOfBathrooms);
    formData.append("furnishedStatus", data.furnishedStatus);
    formData.append(
      "parkingAvailability",
      String(data.parkingAvailability || "")
    );
    formData.append("utilitiesIncluded", String(data.utilitiesIncluded || ""));
    formData.append("petPolicy", data.petPolicy);
    formData.append("nearbyFacilities", data.nearbyFacilities);
    formData.append(
      "mortgageAssistance",
      String(data.mortgageAssistance || "")
    );
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-10 bg- p-6 rounded-lg mt-6 border-green-600 shadow-lg"
      >
        <DeatailSection />
        <AddressSection />
        <TypeOfPropertSection />
        <RentOrSaleSection />
        {watch().rentOrSale === "rent" && <RentOptionsSection />}
        {watch().rentOrSale === "sale" && <SaleOptionSection />}
        <ImageSection />
        <Button type="submit"  className="mt-5 bg-blue-600 hover:bg-blue-700">
          Add Listing
        </Button>
      </form>
    </FormProvider>
  );
}

export default ManagePropertyListingForm;
