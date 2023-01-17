import React from "react";
import ProductList from "../pages/Products/Products";
export const LINKS = [
  { id: "home", path: "/", name: "Home" },
  {
    id: "Makita",
    path: "/Makita",
    name: "Makita",
    element: <ProductList brand="Makita" />,
  },
  {
    id: "Skil",
    path: "/Skil",
    name: "Skil",
    element: <ProductList brand="Skil" />,
  },
  {
    id: "B_Decker",
    path: "/B_Decker",
    name: "Black & Decker",
    element: <ProductList brand="B_Decker" />,
  },
];
