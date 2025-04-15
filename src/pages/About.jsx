import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            <h2>About Cruz Auto Detailing</h2>
            <p>
                At Cruz Auto Detailing, we take pride in our craft. With years of experience and a passion for excellence, we treat every vehicle like it's our own.
                From daily drivers to exotic cars, our detailers are professionally trained and equipped with top-tier products to provide unmatched results.
            </p>
            <p>
                Based locally, we serve our community with integrity, attention to detail, and a commitment to delivering outstanding service.
            </p>
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h3>How long does the detailing process take?</h3>
                    <p>The time required for a detailing service can vary depending on several factors such as the condition of the vehicle, its size, and the type of service being performed. On average, a service can take anywhere from 2 hours to a full day. For example, a standard interior and exterior detail might take around 2-4 hours, but if your vehicle requires additional services like paint correction or ceramic coating, it could take longer. We will provide an estimated time based on your vehicle’s specific needs when you book your appointment.</p>
                </div>
                <div className="faq-item">
                    <h3>What should I do to prepare my vehicle for detailing?</h3>
                    <p>Preparing your vehicle for detailing can help us deliver the best results. Here are some tips:</p>
                    <ul>
                        <li><strong>Remove personal items:</strong> Clear your vehicle of any personal belongings, including valuables, trash, and items in the glove box or center console. This allows us to clean all areas of your car more effectively.</li>
                        <li><strong>Ensure your vehicle is accessible:</strong> Make sure your vehicle is parked in an area that is easy to access, with enough space around it for our team to work. If possible, leave it in a well-lit area to help our technicians do their best work.</li>
                        <li><strong>Inform us of any special requests:</strong> If you have any specific concerns or areas of your vehicle that need extra attention, let us know ahead of time. Whether it's pet hair, tough stains, or a custom service request, we'll make sure to address it.</li>
                        <li><strong>Be aware of the time:</strong> Detailing services can take several hours depending on the service package and your vehicle’s condition. Be prepared for the process to take some time, and feel free to check in with us during the service for updates.</li>
                    </ul>
                    <p>These simple steps can help speed up the process and ensure your vehicle receives the highest quality care. If you have any questions before your appointment, don't hesitate to reach out!</p>
                </div>
                <div className="faq-item">
                    <h3>Do you offer mobile detailing services?</h3>
                    <p>Yes, we come to your location! Our mobile detailing service is available in the Denver metro area and surrounding cities.</p>
                </div>
                <div className="faq-item">
                    <h3>Can I schedule a recurring detailing service?</h3>
                    <p>Absolutely! We offer maintenance detailing services that you can schedule on a weekly, bi-weekly, or monthly basis.</p>
                </div>
            </section>
        </div>
    );
};

export default About;
