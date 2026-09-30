
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import Logoipsum from './components/Logoipsum/logoipsum';
import Skills from './components/Skills/skills';
import Explore from './components/Explore/explore';
import Professional from './components/Professional/professional';
import Potential from './components/Potential/potential';
import Testimonial from './components/Testimonial/testimonial';

function App() {
  return (
    <>
      {/* Navbar + Hero */}
      <div className="min-h-screen bg-brand-blue bg-grid-pattern overflow-hidden relative">
        <div className='w-[1440px] mx-auto px-[120px]'>
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Logoipsum */}
      <div className='bg-[#F5F5F6]'>
        <div className='w-[1440px] mx-auto px-[120px]'>
          <Logoipsum />
        </div>
      </div>

      {/* Skills */}
      <div className='bg-white mt-[72px]'>
        <div className='w-[1440px] mx-auto px-[120px]'>
          <Skills />
          <Explore />
        </div>
      </div>

      {/* Professional */}
      <Professional />

      {/* Potential */}
      <Potential />

      {/* Testimonial */}
      <Testimonial />

    </>
  );
}

export default App;
