import React from "react";
import { useFilter } from "../../context/FilterProvider";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductProvider";

function Product({ products }) {
  const {
    filterState: { product, sortBy, byStock, byRating, byBrand },
  } = useFilter();

  const {
    productState: { cart, wishlist },
    productDispatch,
  } = useProduct();

  const filteredProducts = () => {
    let sortedProducts = product;

    let newSortedProductsArray = [];
    if (!byStock) {
      newSortedProductsArray.length > 0
        ? newSortedProductsArray.filter((prod) => prod.inStock)
        : (sortedProducts = sortedProducts.filter((prod) => prod.inStock));
    }

    if (byBrand.adidas) {
      newSortedProductsArray = [
        ...newSortedProductsArray,
        ...sortedProducts.filter(
          (prod) => "adidas" === prod.brand.toLowerCase()
        ),
      ];
      console.log("adidas", newSortedProductsArray);
    }

    if (byBrand.nike) {
      newSortedProductsArray = [
        ...newSortedProductsArray,
        ...sortedProducts.filter((prod) => "nike" === prod.brand.toLowerCase()),
      ];
    }

    if (byBrand.puma) {
      newSortedProductsArray = [
        ...newSortedProductsArray,
        ...sortedProducts.filter((prod) => "puma" === prod.brand.toLowerCase()),
      ];
    }

    if (byBrand.converse) {
      newSortedProductsArray = [
        ...newSortedProductsArray,
        ...sortedProducts.filter(
          (prod) => "converse" === prod.brand.toLowerCase()
        ),
      ];
    }

    if (sortBy === "LOW_TO_HIGH") {
      newSortedProductsArray.length > 0
        ? (newSortedProductsArray = newSortedProductsArray.sort(
            (a, b) => a.price - b.price
          ))
        : (sortedProducts = sortedProducts.sort((a, b) => a.price - b.price));
    }

    if (sortBy === "HIGH_TO_LOW") {
      newSortedProductsArray.length > 0
        ? (newSortedProductsArray = newSortedProductsArray.sort(
            (a, b) => b.price - a.price
          ))
        : (sortedProducts = sortedProducts.sort((a, b) => b.price - a.price));
    }

    if (byRating) {
      newSortedProductsArray.length > 0
        ? (newSortedProductsArray = newSortedProductsArray.filter(
            (prod) => prod.rating === byRating
          ))
        : (sortedProducts = sortedProducts.filter(
            (prod) => prod.rating === byRating
          ));
    }

    return newSortedProductsArray.length > 0
      ? newSortedProductsArray
      : sortedProducts;
  };

  const finalFilteredProducts =
    products &&
    filteredProducts().map((prod) => (
      <div className="card card-shadow" key={prod.id}>
        <div className="card-image-with-badge">
          <img className="card-image" src={prod.img} alt="" />
          <figure>{prod.categoryName}</figure>
        </div>
        <div className="card-description">
          <h3>{prod.name}</h3>
          <div className="card-product-details">
            <p>{prod.brand}</p>
            <p>
              ₹{prod.price}
              <strike className="card-strk">₹1599</strike>
            </p>
          </div>

          {prod.inStock ? (
            <div className="card-buttons">
              {cart.some((p) => p.id === prod.id) ? (
                <Link to="/cart">
                  {" "}
                  <button className="button button-icon">
                    <i className="fa-solid fa-cart-shopping"></i>
                    Go To Cart
                  </button>{" "}
                </Link>
              ) : (
                <button
                  className="button button-icon"
                  onClick={() =>
                    productDispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    })
                  }
                >
                  <i className="fa-solid fa-heart"></i>
                  Add To Cart
                </button>
              )}
              {wishlist.some((p) => p.id === prod.id) ? (
                <Link to="/wishlist">
                  {" "}
                  <button className="button button-icon">
                    <i className="fa-solid fa-heart"></i>
                    Go To Wishlist
                  </button>
                </Link>
              ) : (
                <button
                  className="button button-icon"
                  onClick={() =>
                    productDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: prod,
                    })
                  }
                >
                  {" "}
                  <i className="fa-solid fa-bag-shopping"></i>Add To Wishlist
                </button>
              )}{" "}
            </div>
          ) : (
            <div>OUT OF STOCK </div>
          )}
        </div>
      </div>
    ));

  return finalFilteredProducts;
}

export default Product;
