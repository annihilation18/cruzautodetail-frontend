import React from 'react';
import '../styles/BookNow.css';

const BookNow = () => {
    return (
        <div className="book-page">
            <h2>Book Your Detailing Appointment</h2>
            <p>To schedule a detail, please call us or fill out the booking form below:</p>
            <form className="booking-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <textarea placeholder="Service Request / Notes" rows="4"></textarea>
                <button type="submit">Submit Booking Request</button>
            </form>
        </div>
    );
};

export default BookNow;
