import React from 'react';
import { Search, ShoppingBag, Play, Star } from 'lucide-react';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';

function App() {
  return (
    <div className="min-h-screen bg-brand-blue bg-grid-pattern overflow-hidden relative">
      <div className='w-[1440px] mx-auto px-[120px]'>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
