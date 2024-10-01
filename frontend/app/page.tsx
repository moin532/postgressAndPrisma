"use client";
import { useEffect, useState } from "react";
import { useUsers } from "./useUsers";
import UserPage from "./update";

export interface User {
  id: any;
  username: string;
  phone: string;
}

const UsersPage = () => {
  const { users, fetchUsers, removeUser } = useUsers();
  const [open, setOpen] = useState(false);
  const [propsData, setPropsData] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const Removeuser = (id: any) => {
    if (window.confirm("Are you sure you want to delete?")) {
      removeUser(id);
    }
  };

  const editUser = (id: number, username: string, userphone: string) => {
    setOpen(true); // Open the edit page/modal
    const userE: User = {
      id: id,
      username: username,
      phone: userphone,
    };

    setPropsData(userE); // Set the user data for editing
  };

  return (
    <div>
      {/* Conditionally render the UserPage component if `open` is true and `propsData` is not null */}
      {open && propsData && <UserPage user={propsData} />}

      {/* Render the user list when the `open` state is false */}
      {!open && (
        <div className="user-list-container">
          <div className="header">
            <h1>Users</h1>
            <button className="create-user-btn">Create User</button>
          </div>

          <div className="table-header">
            <h3>Username</h3>
            <h3>Phone</h3> {/* This can be changed to `Email` if it's email */}
          </div>

          {/* Iterate over the users and display each user row */}
          {users.map((user: User) => (
            <div key={user.id} className="user-row">
              <div className="user-data">
                <p>{user.username}</p> {/* Display username */}
              </div>
              <div className="user-data">
                <p>{user.phone}</p> {/* Display user phone or email */}
              </div>
              <div className="actions">
                {/* Edit user button */}
                <button
                  className="edit-btn"
                  onClick={() => editUser(user.id, user.username, user.phone)}
                >
                  ✏️
                </button>
                {/* Delete user button */}
                <button
                  className="delete-btn"
                  onClick={() => Removeuser(user.id)}
                >
                  ❌
                </button>
                {/* View profile button */}
                <button className="view-profile-btn">View Profile</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
