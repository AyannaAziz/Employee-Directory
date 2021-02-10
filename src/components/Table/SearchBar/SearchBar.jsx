import React, { useState } from "react";

const SearchBar = ({ users, setUsersToDisplay }) => {
  const [searchTerm, setSearchTerm] = useState("");

  //HandleSubmit function , if search term is true return true and that will be returned in filtered users
  const handleSubmit = (e) => {
    const filteredUsers = users.filter((user) => {
      return user.phone.includes(e.target.value);
    });

    setUsersToDisplay(filteredUsers);
  };

  return (
    <div className="search-field">

        <p>Enter telephone number to filter</p>
      <input
        type="text"
        name="searchTerm"
        onChange={(e) => {
          handleSubmit(e);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
