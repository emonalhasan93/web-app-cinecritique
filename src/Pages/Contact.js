import React from 'react';
import banner from '../../src/images/banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLocationDot,faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return(
    <>
    <section   style={
        {
            background:`url(${banner})`,width:'100%',height:'400px',backgroundSize:'cover'
        }
    } >
      <div className='flex items-center justify-center mt-40'>
          <h1 className='text-white text-5xl font-bold'>Contact  Us</h1>
      </div>
   
    </section>
    <div className='mt-16 mb-16 flex gap-16 justify-center items-center text-white'>
        <div className='shadow-xl bg-accent w-72 h-40 rounded-lg text-center'>
        <FontAwesomeIcon className='text-red-500 font-bold text-5xl mt-5' icon={faEnvelope} />
        <h2 className='font-bold text-xl'>Email Us</h2>
        <p><span className='text-blue-500 text-xl'>info@cinecritique.com  </span> <br /> Please Email Us</p>
        </div>
        <div className='shadow-xl bg-accent w-72 h-40 rounded-lg text-center'>
        <FontAwesomeIcon className='text-red-500 font-bold text-5xl mt-5' icon={faPhone} />
        <h2 className='font-bold text-xl'>Call Us</h2>
        <p><span className='text-blue-500 text-xl'>+245 345 234 555  </span><br /> Please Call Us</p>
        </div>
        <div className='shadow-xl bg-accent w-72 h-40 rounded-lg text-center'>
        <FontAwesomeIcon className='text-red-500 font-bold text-5xl mt-5' icon={faLocationDot} />
        <h2 className='font-bold text-xl'>Location</h2>
        <p><span className='text-blue-500 text-xl'>25/2,Newyork,USA  </span><br /> Please Visit Here</p>
        </div>


    </div>
    </>
    );
};

export default Contact;