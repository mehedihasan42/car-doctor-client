import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content space-x-44 flex-col lg:flex-row">
          <div className='relative'>
          <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
          <img src={parts} className="w-2/3 rounded-lg shadow-2xl absolute top-32 left-44" />
          </div>
          <div className='space-y-4'>
            <h1 className='text-[#FF3811] font-bold text-xl'>About</h1>
            <h1 className="text-5xl font-bold text-[#151515]">We are qualified & of experience in this field</h1>
            <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which {"don't"} look even slightly believable.</p>
            <button className="btn bg-[#FF3811] text-white">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;