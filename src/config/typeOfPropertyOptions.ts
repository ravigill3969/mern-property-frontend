export const propertyTypeList = [
  "Apartment",
  "House",
  "Condominium",
  "Commercial Property",
  "Land",
  "Office Space",
] as const;

export const apartmentOptions = {
  common: [
    "Number of Bedrooms",
    "Number of Bathrooms",
    "Balcony",
    "Apartment Size (sq ft)",
    "Floor Level",
    "View (City View, Garden View, Pool View, etc.)",
    "Accessibility Features (Wheelchair Access, Elevator, etc.)",
    "Nearby Facilities (Schools, Public Transport, Hospitals)",
  ],
  rent: [
    "Monthly Rent",
    "Security Deposit",
    "Lease Terms (6 Months, 1 Year, Month-to-Month, etc.)",
    "Furnished Status (Furnished, Unfurnished, Semi-Furnished)",
    "Utilities Included (Water, Electricity, Gas, Internet, None)",
    "Pet Policy (Pets Allowed, No Pets Allowed, Pet Restrictions)",
    "Move-in Date",
    "Parking Availability",
    "Number of Parking Spaces",
    "Amenities (Gym, Pool, Play Area, Community Hall, etc.)",
    "Duration of Stay (Short Term, Long Term)",
  ],
  sale: [
    "Asking Price",
    "Home Ownership Status (Freehold, Leasehold, Shared Ownership)",
    "HOA Fees (Monthly or Yearly)",
    "Year Built",
    "Mortgage Assistance (Available, Not Available)",
    "Property Taxes (Annual)",
    "Renovation History",
    "Parking Availability",
    "Number of Parking Spaces",
    "Garage Availability",
    "Financing Options (Cash, Mortgage, Rent-to-Own)",
    "Legal Clearances (Clear Title, Other Legal Documents)",
  ],
};

export const houseOptions = {
  common: [
    "Number of Bedrooms",
    "Number of Bathrooms",
    "House Size (sq ft)",
    "Yard Size (sq ft)",
    "Garage (Yes/No)",
    "Parking Spaces",
    "Year Built",
    "Renovation History",
    "Furnished Status (Furnished, Unfurnished, Semi-Furnished)",
    "Heating/Cooling",
    "Nearby Facilities (Schools, Public Transport, etc.)",
  ],
  rent: [
    "Monthly Rent",
    "Security Deposit",
    "Lease Terms",
    "Utilities Included",
    "Pet Policy",
    "Move-in Date",
    "Duration of Stay",
  ],
  sale: [
    "Asking Price",
    "Home Ownership Status",
    "Property Taxes",
    "HOA Fees",
    "Financing Options",
    "Legal Clearances",
  ],
};

export const condominiumOptions = {
  common: [
    "Number of Bedrooms",
    "Number of Bathrooms",
    "Condo Size (sq ft)",
    "Floor Level",
    "HOA Fees",
    "Balcony (Yes/No)",
    "Parking Availability",
    "View (City, Garden, etc.)",
    "Amenities (Gym, Pool, etc.)",
    "Year Built",
    "Furnished Status",
    "Security Features",
  ],
  rent: [
    "Monthly Rent",
    "Security Deposit",
    "Lease Terms",
    "Utilities Included",
    "Pet Policy",
    "Move-in Date",
  ],
  sale: [
    "Asking Price",
    "Property Taxes",
    "Home Ownership Status",
    "Mortgage Assistance",
    "Financing Options",
    "Legal Clearances",
  ],
};

export const commercialPropertyOptions = {
  common: [
    "Property Size (sq ft)",
    "Number of Floors",
    "Parking Spaces",
    "Zoning Type",
    "Year Built",
    "Accessibility Features",
    "Security Features",
  ],
  rent: [
    "Monthly Rent",
    "Lease Terms",
    "Security Deposit",
    "Utilities Included",
    "Move-in Date",
  ],
  sale: [
    "Asking Price",
    "Property Taxes",
    "Financing Options",
    "Legal Clearances",
    "Mortgage Assistance",
  ],
};

export const officeSpaceOptions = {
  common: [
    "Office Size (sq ft)",
    "Number of Rooms/Partitions",
    "Parking Availability",
    "Accessibility Features",
    "Security Features",
    "Furnished Status",
    "Amenities (Conference Room, Break Room, etc.)",
    "Utilities (Included/Not Included)",
    "Year Built",
  ],
  rent: [
    "Monthly Rent",
    "Lease Terms",
    "Security Deposit",
    "Move-in Date",
    "Parking Spaces",
  ],
  sale: [
    "Asking Price",
    "Property Taxes",
    "Financing Options",
    "Legal Clearances",
    "Mortgage Assistance",
  ],
};

export const landOptions = [
  "Land Size (Acres, Square Feet, Hectares, etc.)",
  "Zoning Type (Residential, Commercial, Agricultural, Mixed-Use)",
  "Land Use (Developable, Undevelopable, Greenbelt)",
  "Topography (Flat, Sloped, Hilly, etc.)",
  "Utilities Access (Water, Electricity, Gas, Sewer)",
  "Road Access (Paved, Unpaved, Private, Public)",
  "Environmental Restrictions (Wetlands, Protected Areas)",
  "Flood Zone (Yes/No)",
  "Soil Type (Sandy, Clay, Loam, etc.)",
  "Land Boundaries (Fenced, Unfenced)",
  "Nearby Facilities (Public Transport, Schools, Hospitals)",
  "Building Permits (Required/Not Required)",
  "Easements (Yes/No)",
  "Legal Clearances (Clear Title, Encumbrances)",
  "Current Use (Vacant, Agricultural, Forestry, etc.)",
  "Survey Information (Yes/No)",
];
export const rentOptions = [
  {
    optionName: "Monthly Rent",
    type: "number",
    placeholder: "Enter monthly rent amount",
    registerKey: "monthlyRent", // Add registerKey here
  },
  {
    optionName: "Security Deposit",
    type: "number",
    placeholder: "Enter security deposit amount",
    registerKey: "securityDeposit", // Add registerKey here
  },
  {
    optionName: "Lease Terms",
    type: "text",
    placeholder: "Enter lease duration (e.g., 6 months, 1 year)",
    registerKey: "leaseTerms", // Add registerKey here
  },
  {
    optionName: "Move-in Date",
    type: "date",
    placeholder: "Select move-in date",
    registerKey: "moveInDate", // Add registerKey here
  },
  {
    optionName: "Property Size (sq ft)",
    type: "number",
    placeholder: "Enter property size in square feet",
    registerKey: "propertySize", // Add registerKey here
  },
  {
    optionName: "Number of Bedrooms",
    type: "number",
    placeholder: "Enter number of bedrooms",
    registerKey: "numberOfBedrooms", // Add registerKey here
  },
  {
    optionName: "Number of Bathrooms",
    type: "number",
    placeholder: "Enter number of bathrooms",
    registerKey: "numberOfBathrooms", // Add registerKey here
  },
  {
    optionName: "Furnished Status",
    type: "text",
    placeholder: "Enter furnished status (e.g., Furnished, Unfurnished)",
    registerKey: "furnishedStatus", // Add registerKey here
  },
  {
    optionName: "Parking Availability",
    type: "checkbox",
    placeholder: "",
    registerKey: "parkingAvailability", // Add registerKey here
  },
  {
    optionName: "Utilities Included",
    type: "checkbox",
    placeholder: "",
    registerKey: "utilitiesIncluded", // Add registerKey here
  },
  {
    optionName: "Pet Policy",
    type: "text",
    placeholder: "Enter pet policy (e.g., Pets Allowed, No Pets Allowed)",
    registerKey: "petPolicy", // Add registerKey here
  },
  {
    optionName: "Nearby Facilities",
    type: "text",
    placeholder: "Enter nearby facilities (e.g., Schools, Transport)",
    registerKey: "nearbyFacilities", // Add registerKey here
  },
];
export const saleOptions = [
  {
    optionName: "Asking Price",
    placeholder: "Enter asking price",
    type: "number",
    registerKey: "askingPrice", // Added registerKey
  },
  {
    optionName: "Property Size (sq ft)",
    placeholder: "Enter property size",
    type: "number",
    registerKey: "propertySize", // Added registerKey
  },
  {
    optionName: "Number of Bedrooms",
    placeholder: "Enter number of bedrooms",
    type: "number",
    registerKey: "numberOfBedrooms", // Added registerKey
  },
  {
    optionName: "Number of Bathrooms",
    placeholder: "Enter number of bathrooms",
    type: "number",
    registerKey: "numberOfBathrooms", // Added registerKey
  },
  {
    optionName: "Furnished Status",
    placeholder: "Enter furnished status",
    type: "text",
    registerKey: "furnishedStatus", // Added registerKey
  },
  {
    optionName: "HOA Fees",
    placeholder: "Enter HOA fees",
    type: "number",
    registerKey: "hoaFees", // Added registerKey
  },
  {
    optionName: "Property Taxes",
    placeholder: "Enter property taxes",
    type: "number",
    registerKey: "propertyTaxes", // Added registerKey
  },
  {
    optionName: "Nearby Facilities",
    placeholder: "Enter nearby facilities",
    type: "text",
    registerKey: "nearbyFacilities", // Added registerKey
  },
  {
    optionName: "Legal Clearances",
    placeholder: "Enter legal clearances",
    type: "text",
    registerKey: "legalClearances", // Added registerKey
  },
  {
    optionName: "Mortgage Assistance",
    placeholder: "Is mortgage assistance available?",
    type: "checkbox",
    registerKey: "mortgageAssistance", // Added registerKey
  },
  {
    optionName: "Parking Availability",
    placeholder: "Is parking available?",
    type: "checkbox",
    registerKey: "parkingAvailability", // Added registerKey
  },
];
