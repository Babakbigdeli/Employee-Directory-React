import React, { Component } from 'react';
import API from "../utils/API";
import SearchBar from "./SearchBar";
import SearchResTable from "./SearchResTable";


class Main extends Component {

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

      //Method for handling search

      handleSearch = (e) => {
        const searchResult = this.state.employees.filter((emp) => {
          let name = `${emp.name.first}${emp.name.last}`;
          return name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        });
        this.setState({ filteredEmployees: searchResult });
      };


      //Mounting phase method added
      componentDidMount() {
        API.getUsers().then((res) => {
          console.log(res);
          this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results,
          });
        });
      }

      //Render method done and props made for passing to children
      render() {
        return (
          <>
            <SearchBar handleSearch={this.handleSearch} />
            <SearchResTable
              employees={this.state.filteredEmployees}
              handleSort={this.handleSort}
            />
          </>
        );
      }
};

export default Main;