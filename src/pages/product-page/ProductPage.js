import React, { useState, useEffect } from "react";
import ProductGrid from "/components/product-grid/ProductGrid";
import Navbar from "/components/navigation/Navbar";
import Filter from "/components/filter/Filter";
import Footer from "/components/footer/Footer";
import axios from "axios";

function ProductPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get("/api/products");
      setProducts(res.data.products);
      setLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <div className="parent">
      <div className="header">
        <Navbar />
      </div>
      <div className="sidemenu">
        <Filter />
      </div>
      <div className="main">
        <ProductGrid products={products} loading={loading} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default ProductPage;
