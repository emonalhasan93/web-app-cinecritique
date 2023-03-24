import React from 'react';
import home from '../../src/images/home.jpg'

const Home = () => {
    return (
        <section   style={
            {
                background:`url(${home})`,width:'100%',height:'400px',backgroundSize:'cover'
            }
        } >
          <div className='flex items-center justify-center mt-40'>
              <h1 className='text-white text-5xl font-bold'>Home</h1>
          </div>
       
        </section>
    );
};

export default Home;