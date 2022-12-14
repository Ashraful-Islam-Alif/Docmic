import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className='grid justify-center text-center'>
                <p className='text-violet-800 font-medium'>Testimonial</p>
                <h2 className='text-3xl py-4 font-semibold'>What they say?</h2>
            </div>
            <div className='grid justify-items-center '>
                <div className=' grid grid-cols-4 lg:grid-cols-4 gap-4 p-4 bg-white contact-height box-shadow rounded-md'>
                    <div className=' col-span-3'>
                        <h2>David Jeams</h2>
                        <h2 className='py-2'>Patient</h2>
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                    </div>
                    <div className='flex items-center '>
                        <img src="https://i.ibb.co/WxSJcGF/Ikbal-1.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;