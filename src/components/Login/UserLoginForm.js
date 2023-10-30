import React, { useState } from 'react';

const UserLoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the login submission here, e.g., send the data to a server
    // or perform client-side validation.

    console.log('Login data submitted:', formData);
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default UserLoginForm;