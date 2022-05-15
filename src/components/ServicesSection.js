import React from 'react';

const ServicesSection = ({ title, text }) => {
    return (
        <div className='ServicesSection'>
            <div className="service">
                <div className="service-content">
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
