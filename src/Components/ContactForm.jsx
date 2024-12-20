
import React, { useState } from 'react';
import './ContactForm.css'
const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Data:', formData);
    alert(`Form submitted! Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <div className="form-container">
      <h2>CONTACT US</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
