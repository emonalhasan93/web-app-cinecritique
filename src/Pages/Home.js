import React from 'react';
import banner from '../../src/images/banner.jpg'
import inception from '../../src/images/inception.jpg'
import thor from '../../src/images/thor.jpg'
import pikachu from '../../src/images/pikachu.jpg'
import leon from '../../src/images/leon.jpg'
import css from '../../src/Pages/Home.css'

const Home = () => {
    return (
        <>
            <section style={
                {
                    background: `url(${banner})`, width: '100%', height: '400px', backgroundSize: 'cover'
                }
            } >


            </section>
            <section id="hero">
                <section id="product1" className="section-p1">
                    <h2 className='text-3xl text-cyan-500'>Unlimited movies, TV shows, and more</h2>
                    <h3 className='text-2xl'>Premium Collection Movies with Reviews</h3>
                    <div className="pro-container">
                        <div className="pro">
                            <img src={inception} alt="" />
                            <div className="des">
                                <h2 className='text-2xl font-bold text-rose-600'>Inception</h2>

                                <h4 className='text-indigo-500  font-bold text-xl'>The Best Ever Action Movies</h4>
                                <button class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Watch Now
                                </button>
                            </div>
                        </div>
                        <div className="pro">
                            <img src={thor} alt="" />
                            <div className="des">
                                <h2 className='text-2xl font-bold text-rose-600'>Thor The Ultime Hero</h2>

                                <h4 className='text-indigo-500  font-bold text-xl'>The Ultimate Fighting Movies</h4>
                                <button class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Watch Now
                                </button>
                            </div>
                        </div>
                        <div className="pro">
                            <img src={pikachu} alt="" />
                            <div className="des">
                                <h2 className='text-2xl font-bold text-rose-600'> Don Pikachu</h2>

                                <h4 className='text-indigo-500  font-bold text-xl'>Comedy Movie of the Year</h4>
                                <button class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Watch Now
                                </button>
                            </div>
                        </div>
                        <div className="pro">
                            <img src={leon} alt="" />
                            <div className="des">
                                <h2 className='text-2xl font-bold text-rose-600'>Leon 4</h2>

                                <h4 className='text-indigo-500  font-bold text-xl'>The Ultimate Funny Movie</h4>
                                <button class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-white rounded-lg">Watch Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>

    );
};

export default Home;