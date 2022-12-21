import React from 'react';
import AboutSection from '../sections/AboutSection';
import GetitSection from '../sections/GetitSection';
//import HiringSection from '../sections/HiringSection';
import LandingSection from '../sections/LandingSection';

function HomeComponent() {
  return (
    <div>
        <LandingSection />
        <AboutSection />
        {/* <HiringSection /> */}
        <GetitSection />
    </div>
  )
}

export default HomeComponent;