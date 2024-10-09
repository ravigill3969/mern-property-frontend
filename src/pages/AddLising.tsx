import { useCreateMyListing } from "@/api/listingApi";
import ManagePropertyListingForm from "@/forms/managePropertyListingForm/ManagePropertyListingForm";

import { useEffect } from "react";

function AddLising() {
  useEffect(() => {
    document.title = "Add Listing - togthr2sale";
  }, []);

  const { isPending, createListing } = useCreateMyListing();

  return <ManagePropertyListingForm isPending={isPending} onSave={createListing} />;
}

export default AddLising;
