import React from 'react';
import './Pages.css'
const Pages = () => {
    return (
        <div id='pages' class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 py-12">
            <div class=" grid items-center">
                <img src="https://i.ibb.co/64HwXpr/Frame-22.png" alt="" srcset="" />
            </div>
            <div class="col-span-2">
                <p className='text-violet-800 py-4'>Our Hospital Feature</p>
                <h1 className='lg:text-5xl text-lg font-medium'>Make An Appointment Easy And Fast Services</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-6">
                    <div className='bg-white rounded-md p-4'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-2xl py-2'>24 Hours Doctor Support</h2>
                            <img className='icon-logo' src="https://i.ibb.co/Xp8QhmT/Group-21.png" alt="" srcset="" />
                        </div>
                        <p className=' py-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className='bg-white rounded-md p-4'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-2xl py-2'>Exclusive Supports</h2>
                            <img className='icon-logo' src="https://i.ibb.co/Z88f71X/image-6.png" alt="" srcset="" />
                        </div>
                        <p className=' py-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className='bg-white rounded-md p-4'>
                        <div className='flex justify-between  items-center'>
                            <h2 className='text-2xl py-2'>Friendly Environment</h2>
                            <img className='icon-logo' src="https://i.ibb.co/KyX3QZc/image-7.png" alt="" srcset="" />
                        </div>
                        <p className=' py-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className='bg-white rounded-md p-4'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-xl py-2'>24 Hours Nurse Support</h2>
                            <img className='icon-logo' src="https://i.ibb.co/MsnwFtM/Group-24.png" alt="" srcset="" />
                        </div>
                        <p className=' py-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pages;