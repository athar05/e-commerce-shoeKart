import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    id: uuid(),
    categoryName: "Men",
    description: "The Best Men's Shoes",
    img: "/assets/images/men-shoes.webp",
  },
  {
    id: uuid(),
    categoryName: "Women",
    description: "The Best Women's Shoes",
    img: "/assets/images/women-shoes.webp",
  },
  {
    id: uuid(),
    categoryName: "Kids",
    description: "The Best Kids' Shoes",
    img: "/assets/images/baby-shoes.webp",
  },
  {
    id: uuid(),
    categoryName: "In-stock",
    description: "The Best Selling Shoes",
    img: "/assets/images/sales-shoes.webp",
  },
];
