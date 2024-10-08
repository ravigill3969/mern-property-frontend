import UserDetailSection from "@/forms/managePropertyListingForm/ManagePropertyListingForm";

import { useEffect } from "react";

function AddLising() {
  useEffect(() => {
    document.title = "Add Listing - togthr2sale";
  }, []);

  return <UserDetailSection />;
}

export default AddLising;
