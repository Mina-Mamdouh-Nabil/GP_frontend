
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [monumentData, setMonumentData] = useState({
    name: "",
    description: "",
    location: "",
  });

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleMonumentInputChange = (e) => {
    const { name, value } = e.target;
    setMonumentData((prevMonumentData) => ({
      ...prevMonumentData,
      [name]: value,
    }));
  };

  const handleSubmitUserForm = (e) => {
    e.preventDefault();
    // Add logic to submit user data to backend or perform necessary actions
    console.log("User Form Submitted:", userData);
  };

  const handleSubmitMonumentForm = (e) => {
    e.preventDefault();
    // Add logic to submit monument data to backend or perform necessary actions
    console.log("Monument Form Submitted:", monumentData);
  };

  return (
    <div className="admin-forms-container">
      <div className="admin-form-container">
        <h2>Add User</h2>
        <form onSubmit={handleSubmitUserForm}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userData.username}
            onChange={handleUserInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleUserInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleUserInputChange}
          />
          <button type="submit">Add User</button>
        </form>
      </div>

      <div className="admin-form-container">
        <h2>Add Monument</h2>
        <form onSubmit={handleSubmitMonumentForm}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={monumentData.name}
            onChange={handleMonumentInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={monumentData.description}
            onChange={handleMonumentInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={monumentData.location}
            onChange={handleMonumentInputChange}
          />
          <button type="submit">Add Monument</button>
        </form>
      </div>

      <div className="admin-form-container">
        <h2>Edit User</h2>
        <form>
          <input
            type="text"
            name="username"
            placeholder="New Username"
            // Implement state and onChange similar to Add User form
          />
          <input
            type="email"
            name="email"
            placeholder="New Email"
            // Implement state and onChange similar to Add User form
          />
          <input
            type="password"
            name="password"
            placeholder="New Password"
            // Implement state and onChange similar to Add User form
          />
          <button type="submit">Edit User</button>
        </form>
      </div>

      <div className="admin-form-container">
        <h2>Edit Monument</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="New Name"
            // Implement state and onChange similar to Add Monument form
          />
          <input
            type="text"
            name="description"
            placeholder="New Description"
            // Implement state and onChange similar to Add Monument form
          />
          <input
            type="text"
            name="location"
            placeholder="New Location"
            // Implement state and onChange similar to Add Monument form
          />
          <button type="submit">Edit Monument</button>
        </form>
      </div>
    </div>
  );
};

export default App;