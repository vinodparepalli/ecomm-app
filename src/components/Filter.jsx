import React from 'react';

const Filter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="mb-3">
      <h5>Filter by Category</h5>
      <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
