import React from "react";

function SearchResTable({ employees, handleSort }){

  //Passing data received through props and stick them on the dom with html table tags
    return (

        <table>
          <thead>
            <tr> 
              <th>Image</th>
              <th className="tableColumns"
                onClick={() => {
                  handleSort("name");
                }}
              >Name/Last Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {employees[0] !== undefined && employees[0].id !== undefined ? (
              employees.map((employees) => {
                return (
                  <tr>
                    <td>
                      <img src={employees.picture.thumbnail} alt="Profile" />
                    </td>
                    <td>
                      {employees.name.first}{" "}
                      {employees.name.last}
                    </td>
                    <td>{employees.email}</td>
                    <td>{employees.dob.date.split("").slice(0, 10).join("")}</td>
                    <td>{employees.phone}</td>
                  </tr>
                );
              })
            ) : (
              <>No Matches Found</>
            )}
          </tbody>
        </table>
      );

}

export default SearchResTable;