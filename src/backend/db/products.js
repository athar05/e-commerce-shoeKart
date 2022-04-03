import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    name: "Garo Trek 21 Low-Top Lace-Up Shoes",
    brand: "Adidas",
    price: "4999",
    img: "/assets/images/garo-trek.webp",
    categoryName: "Bestseller",
    inStock: true,
    rating: "4",
  },
  {
    id: uuid(),
    name: "Round-Toe Lace-Up Running Shoes",
    brand: "Nike",
    price: "6999",
    img: "/assets/images/round-toe.jpg",
    categoryName: "Bestseller",
    inStock: true,
    rating: "5",
  },
  {
    id: uuid(),
    name: "Round-Toe Running Sports Shoes",
    brand: "Adidas",
    price: "3650",
    img: "assets/images/Round-Toe-women.webp",
    categoryName: "Bestseller",
    inStock: true,
    rating: "5",
  },
  {
    id: uuid(),
    name: "Air Max Bella TR 5 Sports Shoes",
    brand: "Nike",
    price: "4599",
    img: "assets/images/Air Max.webp",
    inStock: false,
    rating: "4",
  },
  {
    id: uuid(),
    name: "Chuck Taylor All Star Lace-Up Shoes",
    brand: "Converse",
    price: "3599",
    img: "assets/images/Chuck Taylor.webp",
    inStock: true,
    rating: "3",
  },
  {
    id: uuid(),
    name: "Leather Lace-Up Casual Shoes",
    brand: "Converse",
    price: "1999",
    img: "assets/images/leather-lace-up.webp",
    inStock: true,
    rating: "4",
  },
  {
    id: uuid(),
    name: "Air Max Bella TR 5 Sports Shoes",
    brand: "Nike",
    price: "4599",
    img: "assets/images/Air Max.webp",
    inStock: false,
    rating: "4",
  },
  {
    id: uuid(),
    name: "Pacer Styx IDP High Risk Performance Sports Shoes",
    brand: "Puma",
    price: "2,474",
    img: "assets/images/puma.jpg",
    categoryName: "Bestseller",
    inStock: true,
    rating: "5",
  },
];
