import { useEffect, useState } from 'react';
import './pages.css';
import { allProducts } from '../data/product';
import ProductCard from '../components/ProductCard';

import Home1 from '../assets/home/home1.jpeg';
import Home2 from '../assets/home/home2.jpeg';
import Home3 from '../assets/home/home3.jpeg';
import Home4 from '../assets/home/home4.jpeg';

const homeImages = [Home1, Home2, Home3, Home4];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % homeImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className='relative h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full overflow-hidden'>
        {homeImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`preview-${i}`}
            className={`absolute w-full h-full inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Overlay text */}
        <div className='absolute w-full inset-0 flex justify-center items-end text-3xl px-16 sm:px-24 bg-black/40'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full max-w-[1920px] text-white pb-12'>
            <div className='uppercase sm:w-[30%]'>
              <h4 className='text-xl font-semibold'>Since 2002</h4>
              <h2 className='text-5xl font-semibold leading-[1.2]'>Luxury Brand Never Fades</h2>
            </div>

            <div className='mt-6 sm:w-[30%]'>
              <p className='text-xl'>
                Explore our curated collection of premium fashion, crafted to perfection.
              </p>
              <button className='btn_white mt-4'>Shop now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className='px-24 max-w-[1920px] mx-auto'>
        <div>
          <h2 className='text-xl uppercase mt-16'>New Collection</h2>
          <h2 className='text-5xl font-semibold uppercase my-2'>New Arrivals</h2>
          <div className='flex flex-col sm:grid sm:grid-cols-3 gap-5'>
            {
              allProducts.map((p) => (
                <ProductCard key={p.id} product={p} /> // sending them as props
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
