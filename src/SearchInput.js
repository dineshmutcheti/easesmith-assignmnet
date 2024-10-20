import React from "react";
import './SearchInput.css'
const SearchInput = () => {
    return(
        <div className="search-bar">
        <img src="https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729275628/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector_xwaakk.jpg"
         alt="Search" 
         className="search-icon"
         />
        <input type="text" placeholder="Search Plant" className="search-input"/>
        <img src="https://res.cloudinary.com/dz7pmnpfv/image/upload/v1729275692/istockphoto-1266964720-612x612_fei8ph.jpg" 
        alt="Plant" 
        className="plant-icon"
        />
    </div>
    )
}

export default SearchInput;