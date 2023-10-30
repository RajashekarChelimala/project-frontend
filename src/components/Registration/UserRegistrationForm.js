import React, { useState } from 'react';
import axios from 'axios';

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
    mobile: '',
    role: 'user',
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

    // Make an Axios POST request to your server
    axios.post('http://localhost:8080/api/users/register', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log('Registration successful', response.data);
      })
      .catch((error) => {
        console.error('Registration failed', error);
      });
  }
  return (
    <div className="container mt-4">
        <div className="row">
        <div className="col-md-6 offset-3">
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            className="form-control"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
}

export default UserRegistrationForm;
