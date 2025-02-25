import React from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";

export default function UsersList({ users, toggleLock }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Users Management</h2>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.email}
            className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md bg-white"
          >
            <div>
              <h3 className="text-lg font-medium">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>

            <span
              onClick={() => toggleLock(user.email)}
              className="cursor-pointer text-2xl transition duration-300 hover:scale-110"
            >
              {user.isBlocked ? (
                <FaLock className="text-red-500" />
              ) : (
                <FaLockOpen className="text-green-500" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
