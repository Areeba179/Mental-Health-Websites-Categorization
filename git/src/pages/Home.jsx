import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import websites from "../data/websites.json";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  const categories = Object.keys(websites);

  const heroImages = [
    "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1200&auto=format&fit=crop"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const [searchQuery, setSearchQuery] = useState("");

  const [searchType, setSearchType] = useState("category");

  const [error, setError] = useState("");

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        (prev + 1) % heroImages.length
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  // CATEGORY NAVIGATION

  const handleCategoryClick = (category) => {

  if (category === "OCD") {
    navigate("/ocd");
  }

  else if (
    category === "Crisis Support & Suicide Prevention"
  ) {
    navigate("/suicide-prevention");
  }

  else if (
    category === "Therapy & Counseling"
  ) {
    navigate("/therapy");
  }

};

  // SEARCH FUNCTION

  const handleSearch = () => {

    if (!searchQuery.trim()) {
      setError("Please enter a search value.");
      return;
    }

    setError("");

    if (
      searchType === "category" &&
      searchQuery.toLowerCase().includes("ocd")
    ) {

      navigate("/ocd");

    } else {

      setError("Category page not created yet.");

    }

  };

  return (

    <div>

      {/* HERO SECTION */}

      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImages[currentImage]})`
        }}
      >

        <div className="overlay">

          <h1>MindCare Directory</h1>

          <p>
            Explore categorized mental health resources and support websites
          </p>

          {/* SEARCH BOX */}

          <div className="search-box">

            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
            />

            {/* SEARCH OPTIONS */}

            <div className="search-options">

              <button
                className={
                  searchType === "category"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSearchType("category")
                }
              >
                Category
              </button>

              <button
                className={
                  searchType === "name"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSearchType("name")
                }
              >
                Website Name
              </button>

              <button
                className={
                  searchType === "url"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setSearchType("url")
                }
              >
                URL
              </button>

            </div>

            {/* SEARCH BUTTON */}

            <button
              className="search-btn"
              onClick={handleSearch}
            >
              Search
            </button>

          </div>

        </div>

      </section>

      {/* ERROR MESSAGE */}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {/* CATEGORIES SECTION */}

      <section className="categories-section">

        <h2>Categories</h2>

        <div className="categories-grid">

          {categories.map((category) => (

            <div
              key={category}
              className="category-card"
              onClick={() =>
                handleCategoryClick(category)
              }
            >

              {category}

            </div>

          ))}

        </div>

      </section>

    </div>

  );
}

export default Home;

