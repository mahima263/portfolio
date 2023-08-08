import React from 'react'
import landing from './portimages/landing.png'

const Portabove = () => {
    return (
        <div className='bg-blue-200 max-w-full max-h-full  px-10 py-5'>
            <div className='flex flex-col justify-center items-center space-y-2 '>
                <div>
                    <h1 className=' text-red-600 font-bold  '>OUR PORTFOLIO</h1>
                </div>
                <div className='font-bold text-3xl'> A Collection Of Our Latest Work</div>
                <div className='flex space-x-4 shadow-light-black  '>
                    <button className="bg-red-600  text-black px-4   py-1 rounded">ALL</button>
                    <button className="bg-white  text-black px-4 py-1 rounded">Apps</button>
                    <button className="bg-white  text-black px-4 py-1   rounded">website</button>
                </div>
            </div>
            <div class=' px-2 bg-blue-200 shadow-md flex flex-wrap space-x-8 space-y-8 justify-center  py-6 md:flex-wrap '>
                {/* <div class='flex flex-wrap space-x-8 space-y-8 justify-center  py-6 md:flex-wrap'> */}
                <div class='rounded-bl-3xl rounded-tr-3xl p-8 bg-blue-100 shadow-md mx-4 h-[250px]'>
                        <img src={landing} alt='Landing Image' className='w-80 h-auto' />
                        <p class='p-1 font-semibold'>Concessionaire Prototype </p>
                    </div>
                    <div class='rounded-bl-3xl rounded-tr-3xl p-8 bg-blue-100 shadow-md mx-4 h-[250px]'>
                        <img src={landing} alt='Landing Image' className='w-80 h-auto' />
                        <p class='p-1 font-semibold'>Concessionaire Prototype </p>
                    </div>
                    <div class='rounded-bl-3xl rounded-tr-3xl p-8 bg-blue-100 shadow-md mx-4 h-[250px]'>
                        <img src={landing} alt='Landing Image' className='w-80 h-auto' />
                        <p class='p-1 font-semibold'>Concessionaire Prototype </p>
                    </div>
                
                
                    <div class='rounded-bl-3xl rounded-tr-3xl p-8 bg-blue-100 shadow-md mx-2 h-[250px]'>
                        <img src={landing} alt='Landing Image' className='w-80 h-auto' />
                        <p class='p-1 font-semibold'>Concessionaire Prototype </p>
                    </div>
                    <div class='rounded-bl-3xl rounded-tr-3xl p-8 bg-blue-100 shadow-md mx-2 h-[250px]'>
                        <img src={landing} alt='Landing Image' className='w-80 h-auto' />
                        <p class='p-1 font-semibold'>Concessionaire Prototype </p>
                    </div>
                    <div class='rounded-bl-3xl rounded-tr-3xl p-8 bg-blue-100 shadow-md mx-2 h-[250px]'>
                        <img src={landing} alt='Landing Image' className='w-80 h-auto' />
                        <p class='p-1 font-semibold'>Concessionaire Prototype </p>
                    </div>
            
            {/* </div> */}
            </div>


        </div>


    )
}

export default Portabove
