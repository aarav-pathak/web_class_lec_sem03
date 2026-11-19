import { useState, useEffect } from 'react';

export default function Productlist() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetch('http://localhost:5174/api/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server returned status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        let list = data;
        if (list && !Array.isArray(list) && Array.isArray(list.products)) {
          list = list.products;
        } else if (Array.isArray(list) && list.length === 1 && list[0] && Array.isArray(list[0].products)) {
          list = list[0].products;
        }
        setItems(Array.isArray(list) ? list : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const categories = ['all', ...new Set(items.map((i) => i.category).filter(Boolean))];

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.brand && item.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="state-container">
        <div className="spinner"></div>
        <p>Loading products from backend...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-container error">
        <div className="error-icon">⚠️</div>
        <h3>Failed to load products</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-btn">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="store-container">
      <header className="store-header">
        <div className="header-content">
          <h1>Product Collection</h1>
          <p className="subtitle">
            Showing {filteredItems.length} of {items.length} items from backend API
          </p>
        </div>

        <div className="controls">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search products, brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {filteredItems.length === 0 ? (
        <div className="no-results">
          <p>No products match your criteria.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredItems.map((p) => {
            const imgUrl = p.thumbnail || (p.images && p.images[0]) || '';
            return (
              <div key={p.id || p.title} className="product-card">
                <div className="image-container">
                  {imgUrl ? (
                    <img src={imgUrl} alt={p.title || 'Product'} loading="lazy" />
                  ) : (
                    <div className="placeholder-img">📦</div>
                  )}
                  {p.discountPercentage > 0 && (
                    <span className="discount-tag">-{Math.round(p.discountPercentage)}%</span>
                  )}
                  {p.category && <span className="category-tag">{p.category}</span>}
                </div>

                <div className="card-body">
                  <div className="brand-rating">
                    <span className="brand-name">{p.brand || 'Generic'}</span>
                    {p.rating && (
                      <span className="rating-badge">
                        ★ {p.rating.toFixed(1)}
                      </span>
                    )}
                  </div>

                  <h3 className="product-title">{p.title || p.name || 'Product'}</h3>

                  {p.description && (
                    <p className="product-desc" title={p.description}>
                      {p.description}
                    </p>
                  )}

                  <div className="card-footer">
                    <div className="price-section">
                      <span className="current-price">${p.price?.toFixed(2)}</span>
                      {p.discountPercentage > 0 && (
                        <span className="original-price">
                          ${(p.price / (1 - p.discountPercentage / 100)).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button className="add-cart-btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
