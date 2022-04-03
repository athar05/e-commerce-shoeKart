import React, { useState, useEffect } from "react";
import Product from "../product/Product";

function ProductGrid({ products, loading }) {
  return (
    <div>
      {loading && <p>Loading....</p>}
      <div className="grid grid-3">
        <Product products={products} loading={loading} />
      </div>
    </div>
  );
}

export default ProductGrid;
