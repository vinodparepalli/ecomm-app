import React from 'react';

const Filter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-3">
      <label htmlFor="categoryFilter" className="form-label">Filter by Category:</label>
      <select 
        id="categoryFilter" 
        className="form-select" 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
