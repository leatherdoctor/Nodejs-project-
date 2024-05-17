import React, { useState } from 'react';

const AlertForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'user', // Default role selected in the dropdown
    rememberMe: false, // Checkbox initial state
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show alert box with form data
    alert(`Username: ${formData.username}\nPassword: ${formData.password}\nRole: ${formData.role}\nRemember Me: ${formData.rememberMe}`);
    // You can also reset the form after submission
    setFormData({ username: '', password: '', role: 'user', rememberMe: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Role:
        <select name="role" value={formData.role} onChange={handleInputChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="guest">Guest</option>
        </select>
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleInputChange}
        />
        Remember Me
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AlertForm;
