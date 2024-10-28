
// A component to create a category navigator
// 
//import React from 'react';

interface NavbarProps {
  categories: string[];
  filterByCategory: (category: string) => void;
}

const Navbar = ({ categories, filterByCategory }: NavbarProps) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={() => filterByCategory('')}>All</button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => filterByCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;