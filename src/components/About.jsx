import React, { forwardRef } from 'react';
import img from '../images/Task-bro.png';

export const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='h-full w-[85%] mx-auto'>
        <div className='about-content flex flex-col-reverse md:flex-row justify-between mt-12'>
            <div className='main font-poppins md:w-1/2 mt-12 md:mt-0'>
                <h1 className='font-bold text-4xl'>I'm a full-stack developer from Israel</h1>
                <h3 className='text-2xl font-light mt-6'>"I have been actively developing projects using a diverse range of programming languages including JavaScript, Python, and C# for over a year. Throughout this period, I have cultivated a deep passion for web development, focusing particularly on honing my skills in React and Node.js, and delivering impactful web projects."
                </h3>
            </div>
            <div className='w-2/3 mx-auto bro-img xl:w-2/3'>
                <img src={img} alt='image' className='xl:w-2/3 mx-auto'/>
            </div>
        </div>
    </div>
  );
});