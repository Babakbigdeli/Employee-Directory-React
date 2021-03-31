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

    //Method for handling sort

    handleSort = (label) => {
      //console.log(label);
      if (this.state.order === "descend") {
        this.setState({
          order: "ascend",
        });
      } else {
        this.setState({
          order: "descend",
        });
      }

      const comparedEmp = (empOne, empTwo) => {
       

        if (this.state.order === "ascend") {
            return empOne[label].first.localeCompare(empTwo[label].first);
        } else {
            return empTwo[label].first.localeCompare(empOne[label].first);
        }
    
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
      };

      const sortedEmployees = this.state.filteredEmployees.sort(comparedEmp);
      this.setState({ filteredEmployees: sortedEmployees });
      };

};

export default SearchResData;