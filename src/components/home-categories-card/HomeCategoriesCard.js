import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeCategoriesCard() {
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("function Running");
    const fetchProducts = async () => {
      setCategoriesLoading(true);
      const res = await axios.get("/api/categories");
      setCategories(res.data.categories);
      setCategoriesLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="categories">
      {categoriesLoading && <h4 className="h4"> Categories Loading</h4>}
      {categories && (
        <div className="cards flex-row">
          {categories.map((item) => (
            <Link to="/products">
              <div className="card" key={item.id}>
                <div>
                  <img className="card-image" src={item.img} alt="" />
                  <div className="card-description card-text-overlay">
                    <h2 className="align-center">{item.categoryName}</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeCategoriesCard;
