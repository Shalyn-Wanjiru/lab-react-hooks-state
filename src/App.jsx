
import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false)

  // State for cart management
  const [cartItems, setCartItems] = useState([])

  // State for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Add products to cart
  const handleAddToCart = (product) => {
    setCartItems((previousItems) => [...previousItems, product])
  }

  // Filter products by category
  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === selectedCategory
        )

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#222' : '#fff',
        color: isDarkMode ? '#fff' : '#222',
        minHeight: '100vh',
        padding: '20px',
        transition: '0.3s'
      }}
    >
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark mode toggle */}
      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggle={handleDarkModeToggle}
      />

      {/* Category filter */}
      <div>
        <label htmlFor="category-filter">Filter by Category: </label>

        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/* Product list */}
      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping cart */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
