// Services.jsx
import React, { useState } from 'react';
import '../styles/Services.css';
import { Link } from 'react-router-dom';
import interior1 from '../assets/service-images/interior1.jpg';
import exterior1 from '../assets/service-images/exterior1.jpg';
import fulldetail1 from '../assets/service-images/fulldetail1.jpg';
import ceramic from '../assets/service-images/ceramic-coating.jpg';
import correction from '../assets/service-images/correction1.jpg';
import maintenance from '../assets/service-images/maintenance1.jpg';
import ThemeToggle from '../components/ThemeToggle'; // Assuming you have a ThemeToggle component

const servicesData = [
    {
        id: 'interior',
        title: 'Interior Detailing',
        image: interior1,
        alt: 'Interior Detailing',
        description: 'Our interior detailing service rejuvenates your vehicle’s cabin, leaving it feeling fresh and clean. This includes deep cleaning of all interior surfaces, upholstery cleaning, and vacuuming.',
        price: 'From $129',
        moreInfo: [
            'Pre-Cleaning Setup: Remove personal items and trash.',
            'Vacuuming: Thorough vacuuming of carpets, seats, floor mats, and upholstery.',
            'Deep Cleaning of Upholstery: Spot clean seats and fabric, apply conditioner for leather seats.',
            'Steam Cleaning (optional): Steam clean upholstery or carpets to sanitize and remove stains for an extra level of cleanliness.',
            'Interior Windows and Mirrors: Clean to eliminate streaks and smudges.',
            'Dashboard and Console: Wipe down with microfiber cloth and appropriate cleaner.',
            'Cup Holder and Storage Areas: Clean with a specialized cleaner.',
            'Air Vents and Crevices: Clean with air blower or small brush.',
            'Fragrance and Deodorization: Apply air freshener to leave a fresh scent.'
        ]
    },
    {
        id: 'exterior',
        title: 'Exterior Detailing',
        image: exterior1,
        alt: 'Exterior Detailing',
        description: 'Make your vehicle shine with our hand wash, wheel cleaning, and window treatment. Add optional wax or sealant for long-lasting protection.',
        price: 'From $99',
        moreInfo: [
            'Pre-Wash Rinse: Spray down the vehicle to remove dirt, grime, and loose debris.',
            'Wheel and Tire Cleaning: Use specialized cleaners to remove brake dust and dirt. Follow up with tire dressing.',
            'Bug and Tar Removal: Apply a bug and tar remover to eliminate stubborn residue.',
            'Foam Wash: Apply foam with a cannon, then hand wash with microfiber mitt.',
            'Rinse and Dry: Thoroughly rinse and dry with microfiber towel to avoid water spots.',
            'Clay Bar Treatment (optional): Removes stubborn contaminants from your paint for a smoother finish and deeper shine.',
            'Polishing (optional): A gentle polish to eliminate swirls and oxidation, restoring your vehicle’s glossy appearance.',
            'Wax or Sealant Application (optional): Add a layer of wax or sealant for superior protection and a brilliant, long-lasting shine.',
            'Window Cleaning: Clean exterior windows and mirrors with glass cleaner.',
            'Trim and Moldings Care: Clean and dress plastic and rubber trim.',
            'Final Inspection: Ensure all surfaces are clean, polished, and protected.'
        ]
    },
    {
        id: 'full',
        title: 'Full Detail',
        image: fulldetail1,
        alt: 'Full Detail',
        description: 'Comprehensive detailing package covering both interior and exterior. Includes deep interior cleaning, leather treatment, exterior clay bar application, and paint sealant for lasting protection.',
        price: 'From $249',
        moreInfo: [
            'Complete revitalization of both interior and exterior surfaces.',
            'Incorporates all premium detailing steps from both Interior and Exterior services.',
            'Thorough clay bar treatment (optional) and decontamination wash to restore the paint’s smoothness.',
            'High-quality paint protection (optional) for long-lasting shine and durability.',
            'Shampoo and condition all upholstery for a fresh, clean interior.',
            'Hand-applied polish (optional) and protective wax for a flawless, high-gloss exterior finish.'
        ]
    },
    {
        id: 'correction',
        title: 'Paint Correction',
        image: correction,
        alt: 'Paint Correction',
        description: 'Remove swirl marks, scratches, and imperfections using professional polishing methods for a showroom finish.',
        price: 'From $299',
        moreInfo: [
            'Paint Inspection: Inspect for scratches, chips, swirl marks.',
            'Clay Bar Treatment (optional): Remove contaminants from the paint for a smoother finish.',
            'Polishing (optional): Two-step polishing to remove imperfections and enhance shine.',
            'Surface Preparation: Apply prep solution to remove oils and residue.',
            'Protective Coating (optional): Apply ceramic coating or wax for long-lasting protection.',
            'Final Inspection: Conduct a thorough inspection to ensure a flawless finish.'
        ]
    },
    {
        id: 'ceramic',
        title: 'Ceramic Coating',
        image: ceramic,
        alt: 'Ceramic Coating',
        description: 'Protect your car with a glossy, hydrophobic ceramic layer. Shields against dirt, UV rays, and minor scratches.',
        price: 'From $499',
        moreInfo: [
            'Lasts 1–5 years depending on package.',
            'High gloss, self-cleaning effect.',
            'Includes full prep and paint polish.',
            'Protects against water spots, contaminants, and scratches.',
            'Easy maintenance with improved resistance to stains.'
        ]
    },
    {
        id: 'maintenance',
        title: 'Maintenance Detailing',
        image: maintenance,
        alt: 'Maintenance Detailing',
        description: 'Keep your car looking great with quick wash & detail sessions, perfect for monthly upkeep.',
        price: 'From $99',
        moreInfo: [
            'Ideal for regular customers.',
            'Quick exterior & interior refresh.',
            'Can be bundled monthly.',
            'Includes light vacuuming and wipe-down.',
            'Hand wash and touch-up wax.'
        ]
    }
    ,
];

function Services() {
    const [expanded, setExpanded] = useState(null);

    const toggleMoreInfo = (id) => {
        setExpanded(prev => (prev === id ? null : id));
    };

    return (
        <div className="services-page">
            <header className="services-header">
                <h1>Our Services</h1>
                <p>Explore our high-quality, mobile auto detailing services tailored to your needs.</p>
            </header>
            <div className="App">
                <ThemeToggle />
                {/* the rest of your components */}
            </div>
            <section className="services-list">
                {servicesData.map(service => (
                    <div className="service-card" key={service.id}>
                        <img src={service.image} alt={service.alt} />
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <p><strong>Price:</strong> {service.price}</p>
                        <button className="learn-more-button" onClick={() => toggleMoreInfo(service.id)}>
                            {expanded === service.id ? 'Hide Details' : 'Learn More'}
                        </button>
                        {expanded === service.id && (
                            <ul className="more-info-list">
                                {service.moreInfo.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>

            <section className="cta-section">
                <h2>Book Your Detailing Service Today!</h2>
                <p>Don’t wait! Let us bring your car to perfection.</p>
                <Link to="/contact">
                    <button className="cta-button">Contact Us to Book Service</button>
                </Link>
            </section>
        </div>
    );
}

export default Services;
