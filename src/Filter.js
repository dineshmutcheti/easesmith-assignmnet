import React from 'react';
import './Filter.css'; 

const Filter = () => {
  const filterOptions = [
    'Type of Plants',
    'Price',
    'Nursery',
    'Ideal Plants Location',
    'Indoor/ Outdoor',
    'Maintenance',
    'Plant Size',
    'Water Schedule',
    'Color',
    'Seasonal',
    'Light Efficient',
  ];

  return (
    <div className="filter-container">
      <div className="filter-header">
        <span>Filter</span>
        <button className="clear-btn">CLEAR ALL</button>
      </div>
      {filterOptions.map((option, index) => (
        <div className="filter-option" key={index}>
          <span>{option}</span>
          <span className="toggle">+</span>
        </div>
      ))}
    </div>
  );
};

export default Filter;
