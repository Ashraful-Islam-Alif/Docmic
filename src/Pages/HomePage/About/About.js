import React from 'react';
import './About.css'
const About = () => {
    return (
        <div id='about'>
            <div className='grid justify-center text-center'>
                <p className='text-violet-800 font-medium'>Our Services</p>
                <h2 className='text-3xl font-semibold'>Services For Your Health</h2>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 py-6">
                <div className='bg-white rounded-md p-4'>
                    <div className='flex justify-between'>
                        <h2 className='text-lg py-4'>Cardiology</h2>
                        <img className='icon-logo' src="https://i.ibb.co/yXq0Wp9/medical-icon-i-cardiology.png" alt="" srcset="" />
                    </div>
                    <p className='text-2xl py-4'>Seduahag perspiciati under omnised atused error.</p>
                    <a className='text-3xl font-semibold py-4' href="">Explore Now</a>
                </div>
                <div className='bg-white rounded-md p-4'>
                    <div className='flex justify-between'>
                        <h2 className='text-lg py-4'>Monthly Check Up</h2>
                        <img className='icon-logo' src="https://i.ibb.co/bNv4f36/bi-clipboard2-check-fill.png" alt="" srcset="" />
                    </div>
                    <p className='text-2xl py-4'>Seduahag perspiciati under omnised atused error.</p>
                    <a className='text-3xl font-semibold py-4' href="">Explore Now</a>
                </div>
                <div className='bg-white rounded-md p-4'>
                    <div className='flex justify-between'>
                        <h2 className='text-lg py-4'>Dental Care</h2>
                        <img className='icon-logo' src="https://i.ibb.co/gmMbrP4/medical-icon-i-dental.png" alt="" srcset="" />
                    </div>
                    <p className='text-2xl py-4'>Seduahag perspiciati under omnised atused error.</p>
                    <a className='text-3xl font-semibold py-4' href="">Explore Now</a>
                </div>
                <div className='bg-white rounded-md p-4'>
                    <div className='flex justify-between'>
                        <h2 className='text-lg py-4'>Opthalmology</h2>
                        <img className='icon-logo' src="https://i.ibb.co/jgBpBxM/fluent-briefcase-medical-32-filled.png" alt="" srcset="" />
                    </div>
                    <p className='text-2xl py-4'>Seduahag perspiciati under omnised atused error.</p>
                    <a className='text-3xl font-semibold py-4' href="">Explore Now</a>
                </div>
            </div>
        </div>
    );
};

export default About;