export const rentOrSaleOption = [
  {
    title: "Rent",
    type: "radio",
  },
  {
    title: "Sale",
    type: "radio",
  },
];

export const rentOptions = [
  {
    title: "Rent per month",
    type: "number",
    className: "font-bold ",
    placeholder:"$500",
    classNameForInput: "w-20 px-2",
  },
  {
    title: "Parking",
    type: "checkbox",
  },
  {
    title: "Furnished",
    type: "checkbox",
  },
  {
    title: "Utilities",
    type: "checkbox",
  },
  {
    title: "Move In",
    type: "date",
    className: "font-bold",
    classNameForInput: "w-25 px-2",
  },
];
export const saleOptions = [
  {
    title: "Price",
    type: "number",
    className: "font-bold",
    placeholder:"$100000",

    classNameForInput: "w-25 px-2 ",
  },
  {
    title: "Parking",
    type: "checkbox",
  },
  {
    title: "Furnished",
    type: "checkbox",
  },
];

export const propertyTypeList = [
  "Apartment",
  "House",
  "Condominium",
  "Commercial Property",
  "Land",
  "Office Space",
] as const;
