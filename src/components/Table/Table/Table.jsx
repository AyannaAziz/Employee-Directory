import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [usersToDisplay, setUsersToDisplay] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then((response) => {
      console.log(response.data);
      setUsersToDisplay(response.data.results);
      setUsers(response.data.results);
    });
  }, []);

  

  //
  const sortByName = () => {
    if (sortDirection === "asc") {
      sortByNameAsc();
      setSortDirection("desc");
    } else {
      sortByNameDesc();
      setSortDirection("asc");
    }
  };

  //Function to sort employees by their name in ascending order 
  const sortByNameAsc = () => {
    const tempUsers = [...users];
    const sortedUsers = tempUsers.sort((a, b) => {
      const aValue = a.name.first;
      const bValue = b.name.first;
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    });
    console.log(sortedUsers);
    setUsersToDisplay(sortedUsers);
  };

  //Function to sort employees by their name in descending order
  const sortByNameDesc = () => {
    const tempUsers = [...users];
    const sortedUsers = tempUsers.sort((a, b) => {
      const aValue = a.name.first;
      const bValue = b.name.first;
      if (aValue > bValue) {
        return -1;
      }
      if (aValue < bValue) {
        return 1;
      }
      return 0;
    });
    console.log(sortedUsers);
    setUsersToDisplay(sortedUsers);
  };

  return (
    <div>
      <div>
       <SearchBar users={users} setUsersToDisplay={setUsersToDisplay}/>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Photo</th>
              <th scope="col" onClick={sortByName}>
                Name
              </th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {usersToDisplay.map((user, index) => (
              <tr>
                {" "}
                key={index}
                <th scope="row">{user.id.value}</th>
                <td>
                  <img src={user.picture.thumbnail}></img>
                </td>
                <td>
                  {user.name.first} , {user.name.last}{" "}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.dob.date}</td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
