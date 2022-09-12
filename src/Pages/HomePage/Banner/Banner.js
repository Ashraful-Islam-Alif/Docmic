import React from 'react';
import './Banner.css'
const Banner = () => {
    return (


        <div id='home'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">

                    <div>
                        <h1 className="text-3xl lg:text-6xl ">Your <span className='text-blue-500'>Health</span> Is Our <br />Top <span className='text-violet-800'>Priority</span></h1>
                        <p className="py-6">There are many variations of passages of lpsum available, but the majority hae suffered.</p>
                        <button className="btn bg-blue-500 text-white border-none">Meet Our Specialist</button>
                        <div class="grid grid-cols-3 gap-4 py-6 text-center">
                            <div>
                                <h2 className='text-violet-800 font-bold text-lg'>262k+</h2>
                                <p>Recovered Patients</p>
                            </div>
                            <div>
                                <h2 className='text-violet-800 font-bold text-lg'>96%</h2>
                                <p>Satisfaction Rate</p>
                            </div>
                            <div>
                                <h2 className='text-violet-800 font-bold text-lg'>86+</h2>
                                <p>Expert Doctors</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/gg45XGP/banner.png" className="" />

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Banner;