export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: "Phone XL",
    price: 799,
    description: "A large phone with one of the best screens",
  },
  {
    id: 2,
    name: "Phone Mini",
    price: 699,
    description: "A great phone with one of the best cameras",
  },
  {
    id: 3,
    name: "Phone Standard",
    price: 299,
    description: "A normal phone with normal specs",
  },
  {
    id: 4,
    name: "Tablet XL",
    price: 799,
    description: "A large tablet with one of the best screens",
  },
  {
    id: 5,
    name: "Tablet Mini",
    price: 699,
    description: "A great tablet with one of the best cameras",
  },
  {
    id: 6,
    name: "Tablet Standard",
    price: 299,
    description: "A normal tablet with normal specs",
  },
];
