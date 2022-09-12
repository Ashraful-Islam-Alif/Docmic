import React from 'react';
import './Department.css'
const Department = () => {
    return (
        <div id='department' class="grid grid-cols-1 lg:grid-cols-3 gap-4 py-12">

            <div class="col-span-2">
                <p className='text-violet-800 py-4'>16+ Years Experiences </p>
                <h1 className='text-5xl font-medium'>We Are Always ensure Best Medical Treatment For Your Health</h1>
                <p className='py-6'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
            </div>
            <div class="">
                <img src="https://i.ibb.co/99HZJ1w/Frame-23.png" alt="" srcset="" />
            </div>
        </div>
    );
};

export default Department;