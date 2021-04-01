import React from "react";
import "../styles/SearchBar.css";


// Methods and props passed in 
function SearchBar({handleSearch}) {

    return (
        <div className="searchBar">
           <form>
             <input type="search"
               placeholder="Type name to search" 
               id = "placeholder"
               onChange={event => handleSearch(event)} />
           </form>
        </div>
            )

}

export default SearchBar;