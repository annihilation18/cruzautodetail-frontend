import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
    const [inquiryType, setInquiryType] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, phoneNumber, inquiryType, message });
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
            </div>
            <div className="contact-form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Your Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Inquiry Type</option>
                        <option value="quote">Request a Quote</option>
                        <option value="general">General Inquiry</option>
                    </select>
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-info">
                <h2>Need Assistance?</h2>
                <p>Feel free to give us a call at <a className="phone-link" href="tel:+1234567890">+1 (234) 567-890</a></p>
            </div>
        </div>
    );
};

export default Contact;
