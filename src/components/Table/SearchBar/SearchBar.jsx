import React, { useState } from "react";

const SearchBar = ({users, setUsersToDisplay}) => {
const [searchTerm, setSearchTerm] = useState("");


//HandleSubmit function , if search term is true return true and that will be returned in filtered users
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredUsers = users.filter((user) => {
      return user.phone.includes(searchTerm);
    });

    setUsersToDisplay(filteredUsers);
  };

  //HandleReset function ,
  const handleReset = () => {
    setUsersToDisplay(users);
  };


    return (
    <form onSubmit={handleSubmit}>
<input
  type="text"
  placeholder="Enter phone number to filter"
  name="searchTerm"
  value={searchTerm}
  onChange={(e) => {
    setSearchTerm(e.target.value);
  }}
></input>
<button className="btn btn-primary"> Search </button>
<button
  className="btn btn-secondary"
  onClick={handleReset}
  type="button"
>
  Reset
</button>
</form>
    )
}

export default SearchBar; 