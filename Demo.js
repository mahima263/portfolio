import React from 'react'
import image1 from './portimages/roundblue.png';
import image2 from './portimages/roundyellow.png';
import image3 from './portimages/roundpink.png';
import image4 from './portimages/roundgreen.png';
import image5 from './portimages/roundgreen.png';


const Demo = () => {
  return (
   <div>
    <section className="text-gray-600 bg-blue-200 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="  container  text-center w-full mb-20 flow-root lg:px-64 md:px-60  ">
      <h1 className=' inline-block mb-4 sm:float-left   border-2 rounded-t-lg rounded-r-lg border-solid  bg-white w-64 h-18 mt-8text-blue-800 text-lg font-bold'><span className='text-orange-400 font-bold text-3xl'>89%</span><br></br>ON THE COMPLETION</h1>
      <h1 className='  sm:float-right  border-2 rounded-t-lg rounded-b-lg border-solid bg-white  w-64 h-18 mt-8text-blue-800 text-lg font-bold'><span className='text-orange-400 font-bold text-3xl'>64</span><br></br>TOTAL PROJECTS</h1>
    </div>
    <div className="flex flex-wrap lg:flex-nowrap md:flex-wrap sm:flex-wrap -m-4 text-center">
      <div className="md:w-1/4  sm:w-1/2   ">
        <div className="px-2 py-6 relative">
           <img src={image1}/>
           <p className='absolute lg:text-sm  top-1/3 left-1/4 -translate-x-1/2-translate-y-1/2 text-center text-gray-500 font-semibold md:text-xs  '><span className='font-bold text-xl text-black' >200+</span><span><br/>COMPANIES</span></p>
        </div>
      </div>
      <div className=" md:w-1/4 sm:w-1/2 ">
        <div className="px-2 py-6 relative">
        <img src={image2}/>
        <p className='absolute text-sm top-1/3 left-1/4 -translate-x-1/2-translate-y-1/2  text-gray-500 font-semibold'><span className='font-bold text-xl text-black' >2200+</span><span><br/>Research Papers</span></p>
        </div>
      </div>
      <div className="md:w-1/4 sm:w-1/2">
        <div className=" py-6 relative">
        <img src={image3}/>
        <p className='absolute text-sm  top-1/3 left-1/4  -translate-x-1/2-translate-y-1/2  text-gray-500 font-semibold'><span className='font-bold text-xl text-black'>1155+</span><span><br/>PATENT FILED</span></p>
        </div>
      </div>
      <div className="md:w-1/4 sm:w-1/2 ">
        <div className=" py-6 relative ">
        <img src={image4}/>
        <p className='absolute text-sm  top-1/3 left-1/4 -translate-x-1/2-translate-y-1/2  text-gray-500 font-semibold'><span className='font-bold text-xl text-black'>30</span><span><br/>PATENT DESIGN<br/> FILED</span></p>
        </div>
      </div>
      <div className="md:w-1/4 sm:w-1/2  ">
        <div className="py-6 relative" >
        <img src={image5}/>
        <p className='absolute text-sm  top-1/3 left-1/4 -translate-x-1/2-translate-y-1/2  text-gray-500 font-semibold'><span className='font-bold text-xl text-black'>13</span><span><br/>START-UPS</span></p>
        </div>
      </div>
    </div>
  </div>
</section>
   </div>
  )
}

export default Demo