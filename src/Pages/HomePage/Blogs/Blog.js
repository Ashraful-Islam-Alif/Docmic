import React from 'react';

const Blog = () => {
    return (
        <div id='blog' class="grid grid-cols-3 gap-4 items-center">
            <div className='col-span-2'>
                <p className='text-violet-800'>FAQ Questions</p>
                <h2 className='py-2 text-3xl font-semibold'>Get Your General Answer</h2>
                <div className='py-2'>
                    <div className='flex space-x-32'>
                        <div><h1>Get Your General Answer</h1></div>
                        <div><h1>+</h1></div>
                    </div>
                </div>
                <div className='py-2'>
                    <div className='flex space-x-16'>
                        <div><h1>Will I always see my own doctor ? </h1></div>
                        <div><h1> +</h1></div>
                    </div>
                </div>
                <div className='py-2'>
                    <div className='flex space-x-28'>
                        <div><h1>What is one Medical’s care?</h1></div>
                        <div><h1>+</h1></div>
                    </div>
                </div>
                <div className='py-2'>
                    <div className='flex space-x-16'>
                        <div><h1>What is evidence based medicine?</h1></div>
                        <div><h1>+</h1></div>
                    </div>
                </div>
                <div className='py-2'>
                    <div className='flex space-x-12'>
                        <div><h1>What is an academic medical center?</h1></div>
                        <div><h1>+</h1></div>
                    </div>
                </div>
            </div>

            <div className='col-span-1'>
                <img src="https://i.ibb.co/QPhmwwF/Capture.png" alt="" srcset="" />
            </div>
        </div>
    );
};

export default Blog;