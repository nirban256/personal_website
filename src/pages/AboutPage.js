import React from 'react';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import design from '../images/design.svg';

const AboutPage = () => {
    return (
        <div className='AboutPage'>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <SkillsSection />
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title="Web Developer" text={'I create modern responsive websites with animations, hover effects and much more using latest web development tools and languages.'} />
                <ServicesSection image={design} title="Web Designer" text={'I design modern responsive websites with animations, hover effects and much more using latest web design tools and techniques.'} />
            </div>
        </div>
    );
};

export default AboutPage;
