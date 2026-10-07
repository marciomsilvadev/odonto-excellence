import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Treatments } from './components/Treatments';
import { Clinic } from './components/Clinic';
import { BeforeAfter } from './components/BeforeAfter';
import { Team } from './components/Team';
import { Reviews } from './components/Reviews';
import { AppointmentCTA } from './components/AppointmentCTA';
import { LocationFAQ } from './components/LocationFAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Treatments />
        <Clinic />
        <BeforeAfter />
        <Team />
        <Reviews />
        <AppointmentCTA />
        <LocationFAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
