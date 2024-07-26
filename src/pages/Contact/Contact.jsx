import React, { useState } from "react";
import "./index.scss"; // Assuming you will add some CSS for styling
import InputField from "../../components/ui/InputField";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          If you have any questions, please fill out the form below and we will
          get back to you as soon as possible.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <InputField
            field="name"
            label="Full Name:"
            type="text"
            value={formData.name}
            onChange={handleChange}
            isValid={!formErrors.name}
            errorMessage={formErrors.name}
          />
          <InputField
            field="email"
            label="Email:"
            type="email"
            value={formData.email}
            onChange={handleChange}
            isValid={!formErrors.email}
            errorMessage={formErrors.email}
          />
          <InputField
            field="subject"
            label="Subject:"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            isValid={!formErrors.subject}
            errorMessage={formErrors.subject}
          />
          <div className={`input-field message`}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="8"
              cols='50'
              value={formData.message}
              onChange={handleChange}
            />
            {!formErrors.message && (
              <p className="error">{formErrors.message}</p>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <img src={""} alt="Contact Us" className="contact-illustration" />
    </div>
  );
};

export default Contact;
