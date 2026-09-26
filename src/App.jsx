import { useState } from "react";
import "./App.css";
import pizzas from "./MenuItem.jsx";

function FilterButton({ category, activeCategory, onClick }) {
  return (
    <button
      className={activeCategory === category ? "active" : ""}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
      "All",
      "Lunch",
      "Dinner",
      "Breakfast",
      "Dessert",
      "Drink",
    ];

  const filteredPizzas =
    activeCategory === "All"
      ? pizzas
      : pizzas.filter((pizza) => pizza.category === activeCategory);

  return (
    <div className="app">
      <header>
        <h1>— FAST REACT PIZZA CO. —</h1>
      </header>

      <main>
        <section className="menu">
          <h2>OUR MENU</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((category) => (
              <FilterButton
                key={category}
                category={category}
                activeCategory={activeCategory}
                onClick={setActiveCategory}
              />
            ))}
          </div>

          <p className="intro">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <div className="pizza-grid">
            {filteredPizzas.map((pizza) => (
              <div
                className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}
                key={pizza.name}
              >
                <img src={pizza.image} alt={pizza.name} />

                <div className="pizza-info">
                  <h3>{pizza.name}</h3>

                  <p>{pizza.description}</p>

                  {pizza.soldOut ? (
                    <span className="sold">SOLD OUT</span>
                  ) : (
                    <span className="category">{pizza.category}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-content">
            <p>We're open until 22:00. Come visit us or order online.</p>

            <button>Order now</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
