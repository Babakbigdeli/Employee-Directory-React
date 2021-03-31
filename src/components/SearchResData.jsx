import React, { Component } from 'react';
import API from "../utils/API";
import SearchResTable from "./SearchResTable";
import SearchBar from "./SearchBar";

class SearchResData extends Component {

    //Initial state defined
    state = {
        employees: [{}],
        filteredEmployees: [{}],
        order: "descend",
      };
};

export default SearchResData;