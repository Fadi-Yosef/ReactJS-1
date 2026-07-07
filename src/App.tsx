import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Goals from './components/Goals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Goals />
      </main>
      <Footer />
    </div>
  );
}

export default App;
