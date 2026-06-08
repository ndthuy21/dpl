import React, { useState } from "react";

const initialForm = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function Register() {
  const [formData, setFormData] = useState(initialForm);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    const response = await fetch("/djangoapp/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: formData.username,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      }),
    });

    if (response.ok) {
      setMessage("Registration successful. You can now log in.");
      setFormData(initialForm);
      return;
    }

    setMessage("Registration failed. Please check your details and try again.");
  };

  return (
    <main className="register-page">
      <section className="register-panel" aria-labelledby="register-heading">
        <p className="register-eyebrow">Create your account</p>
        <h1 id="register-heading">Sign-up</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />

          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            autoComplete="given-name"
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            autoComplete="family-name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <button type="submit">Register</button>
        </form>

        {message && <p className="register-message">{message}</p>}
      </section>
    </main>
  );
}

export default Register;
