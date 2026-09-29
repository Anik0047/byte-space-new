import React from 'react';
import { Search, ShoppingBag, Play, Star } from 'lucide-react';

function App() {
  return (
    <div>
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">byte space</h1>
        <div className="flex items-center gap-4">
          <Search className="cursor-pointer" size={20} />
          <ShoppingBag className="cursor-pointer" size={20} />
          <div className="bg-white text-brand-blue px-4 py-2 rounded-full cursor-pointer hover:bg-brand-green hover:text-brand-blue transition">
            Try for free
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
