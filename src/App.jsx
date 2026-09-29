import React from 'react';
import { Search, ShoppingBag, Play, Star } from 'lucide-react';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="min-h-screen bg-brand-blue bg-grid-pattern overflow-hidden relative">
      <div className='w-[1440px] border border-white mx-auto px-[120px]'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
