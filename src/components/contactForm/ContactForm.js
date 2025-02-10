import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={(e) => setName(e.target.value)} name="name" value={name} placeholder="Type in your name"/>
    <input type="tel" onChange={(e) => setPhone(e.target.value)} name="phone" value={phone} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    placeholder="Type in your phone number"/>
    <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder="Type in your email"/>
    <button type="submit">Submit</button>
    </form>
    
    
    
    </>
  );
};

