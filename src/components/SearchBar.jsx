import React from "react";



// Methods and props passed in 
function SearchBar({handleSearch}) {

    return (
        <div className="searchBar">
           <form>
             <input type="search"
               placeholder="Type name to search"
               onChange={event => handleSearch(event)} />
           </form>
        </div>
            )

}

export default SearchBar;