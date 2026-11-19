import React, { useState } from 'react'
import Foods from './Food'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Pizza", "Burger", "South Indian", "Roll", "Snacks", "Beverage", "North Indian", "Starter", "Rice", "Dessert"];

  const filteredFoods = selectedCategory === "All" 
    ? Foods 
    : Foods.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="app-container">
      {/* Floating MacBook Dock Navbar */}
      <header className="mac-dock-navbar">
        <div className="dock-left-section">
          {/* macOS Traffic Lights */}
          <div className="mac-traffic-lights">
            <span className="traffic-dot dot-red"></span>
            <span className="traffic-dot dot-yellow"></span>
            <span className="traffic-dot dot-green"></span>
          </div>

          <div className="dock-brand">
            <span className="dock-logo-icon">🍽️</span>
            <h1 className="dock-title">GourmetMenu</h1>
          </div>
        </div>

        {/* Floating Cart Capsule */}
        <div className="cart-capsule" role="button" tabIndex={0}>
          <span>🛒 Cart</span>
          <span className="cart-number-pill">{cartCount}</span>
        </div>
      </header>

      {/* Floating Category Filter Capsule Bar */}
      <nav className="category-dock" aria-label="Food Categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-capsule-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Glassmorphism Food Cards Grid */}
      <main className="food-grid">
        {filteredFoods.map((e, index) => {
          return (
            <article 
              key={e.id} 
              className={`glass-food-card ${!e.available ? 'unavailable' : ''}`}
            >
              <div className="card-media-box">
                <img 
                  src={e.image} 
                  alt={e.name} 
                  className="food-media-img" 
                  loading={index < 4 ? "eager" : "lazy"} 
                  decoding="async" 
                />
                <span className="glass-pill-tag">{e.category}</span>
                <span className="glass-emoji-pill">{e.emoji}</span>
              </div>

              <div className="card-content-box">
                <div>
                  <div className="card-title-row">
                    <h3 className="food-headline">{e.name}</h3>
                    <span className="food-price-badge">₹{e.price}</span>
                  </div>

                  <div style={{ marginTop: '10px' }}>
                    <span className={`availability-pill ${e.available ? 'in-stock' : 'out-of-stock'}`}>
                      <span className="status-indicator-dot"></span>
                      {e.available ? "Available" : "Not Available"}
                    </span>
                  </div>
                </div>

                {/* Capsule Style Add to Cart Button */}
                <button 
                  className="capsule-btn-cart"
                  disabled={!e.available} 
                  onClick={() => setCartCount(cartCount + 1)}
                >
                  {e.available ? "Add to Cart" : "Unavailable"}
                </button>
              </div>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export default App;