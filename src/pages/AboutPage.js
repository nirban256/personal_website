import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';

const AboutPage = () => {
    return (
        <div className='AboutPage'>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <SkillsSection />
            <Title title={'Work'} span={'Work'} />
            <div className="services-container">
                <ServicesSection title="Blockchain Developer" text={'I build Decentralized applications with Solidity for the programming language of smart contracts and ReactJs for my Frontend of the application in different ecosystems like Ethereum, Polygon and Avalanche.'} />
                <ServicesSection title="Frontend Web Developer" text={'I create modern responsive websites with animations, hover effects and much more using latest web development tools and languages.'} />
            </div>
        </div>
    );
};

export default AboutPage;
