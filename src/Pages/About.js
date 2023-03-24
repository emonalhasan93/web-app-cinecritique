import React from 'react';
import about from '../../src/images/banner.jpg'

const About = () => {
    return (
        <section   style={
            {
                background:`url(${about})`,width:'100%',height:'400px',backgroundSize:'cover'
            }
        } >
          <div className='flex items-center justify-center mt-40'>
              <h1 className='text-white text-5xl font-bold'>About  Us</h1>
          </div>
       
        </section>
    );
};

export default About;