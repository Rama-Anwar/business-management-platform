import { useState, useEffect } from "react";
import UsersList from "../components/UsersList";

export default function UsersPage() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setAllUsers(users);
  }, []);

  const toggleLock = (email) => {
    const updatedUsers = allUsers.map((user) =>
      user.email === email ? { ...user, isBlocked: !user.isBlocked } : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setAllUsers([...updatedUsers]);
  };

  return <UsersList users={allUsers} toggleLock={toggleLock} />;
}
