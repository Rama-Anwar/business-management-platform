import { FaLock, FaLockOpen } from "react-icons/fa";

export default function UsersList({ users, toggleLock }) {
  return (
    <div>
      <h2>Users Management</h2>
      {users.map((user) => (
        <div
          style={{
            border: "1px solid black",
            margin: "20px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          key={user.email}
        >
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>

          <span
            onClick={() => toggleLock(user.email)}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              marginRight: "10px",
            }}
          >
            {user.isBlocked ? (
              <FaLock color="black" />
            ) : (
              <FaLockOpen color="gray" />
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
