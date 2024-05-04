import React, { useEffect, useState } from "react";

const LIMIT = 5;

const Pagination = () => {
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(offset);
  }, [offset]);

  const fetchUsers = async (page) => {
    try {
      const response = await fetch(
        `http://localhost:8000/users?limit=${LIMIT}&offset=${offset}`
      );
      const { users, totalCount } = await response.json();
      setUsers(users);
      setTotalCount(totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = () => {
    if (offset <= 0) {
      return;
    }

    setOffset(offset - LIMIT);
  };

  const handleNextPage = () => {
    if (offset + LIMIT >= totalCount) {
      return;
    }

    setOffset(offset + LIMIT);
  };

  return (
    <div>
      {/* Display the users */}
      {users.map((user) => (
        <div key={user.id}>
          #{user.id} | {user.name}
        </div>
      ))}

      {/* Pagination controls */}
      <button onClick={handlePrevPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};

export default Pagination;
