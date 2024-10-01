import { useEffect, useState } from "react";
import { useUsers } from "./useUsers";

export interface User {
  id: any;
  username: string;
  phone: string;
}

interface UserProfileProps {
  user: User;
}

const UserPage: React.FC<UserProfileProps> = ({ user }) => {
  const { editUser } = useUsers();
  const [userName, setUsername] = useState(user.username);
  const [phone, setPhone] = useState(user.phone);

  useEffect(() => {
    setUsername(user.username);
    setPhone(user.phone);
  }, [user]);

  const saveHandler = async () => {
    console.log("Saving User Data", { name: userName, phone });

    const data = {
      user: "moin532",
      phone: phone,
    };
    await editUser(user.id, data);
  };

  const cancelHandler = () => {
    setUsername(user.username);
    setPhone(user.phone);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">User Create / Edit</h1>

      <div className="form-fields">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn save-btn" onClick={saveHandler}>
          Save
        </button>
        <button className="btn cancel-btn" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserPage;
