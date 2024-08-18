import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//import icons
import {FaStar} from "react-icons/fa6"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
    <h2 className='text-5xl font-bold text-center mb-10 leading-snug ml-0 sm:ml-20'>Achievements</h2>

        <p>Our achievers demonstrate that success in the coeval world relies not only on cognizance, but also on imagination, entrepreneurship, and the ability to explore.</p>
        <div>
        
       <Swiper
  slidesPerView={1}
  spaceBetween={30}
  autoplay={{ delay:1000 }}
  loop={true} 
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }}
  modules={[Pagination,Autoplay]}
  className="mySwiper"
 
>
  {/* Slides */}



        <SwiperSlide className='shadow-2xl bg-transparent py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="/toopers.jpg" alt="" />
                <h3 className='text-lg font-medium'>Academic</h3>
                <p className='text-base'>Rank Holders</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="/acid.jpg" alt="" />
                <h3 className='text-lg font-medium'>Exhibitions</h3>
                <p className='text-base'>Science Tech Exploration</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="/water.jpg" alt="" />
                <h3 className='text-lg font-medium'>Science and Tech</h3>
                <p className='text-base'>Exploration in Space</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="/boy.jpg" alt="Education" />
                <h3 className='text-lg font-medium'>Education Achievement </h3>
                <p className='text-base'>School Rank Holder</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="/gold.jpg" alt="" />
                <h3 className='text-lg font-medium'>Trips and Learning</h3>
                <p className='text-base'>Learn with fun!</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="/yoga.jpg" alt="" />
                <h3 className='text-lg font-medium'>Talents</h3>
                <p className='text-base'>Showcasing the best in them. </p>
                </div>
            </div>
        </SwiperSlide>
       
        
      </Swiper>
        </div>
      
    </div>
  )
}

export default Reviews



// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FaStar } from "react-icons/fa6";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';

// const Reviews = () => {
//   return (
//     <div className='my-12 px-4 lg:px-24'>
//       <h2 className='text-5xl font-bold text-center mb-10 leading-snug ml-0 sm:ml-20'>Achievements</h2>
//       <p>Our achievers demonstrate that success in the coeval world relies not only on cognizance, but also on imagination, entrepreneurship, and the ability to explore.</p>
//       <div>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           autoplay={{ delay: 1000 }}
//           loop={true}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1, spaceBetween: 20 },
//             768: { slidesPerView: 2, spaceBetween: 40 },
//             1024: { slidesPerView: 3, spaceBetween: 50 },
//           }}
//           modules={[Pagination, Autoplay]}
//           className="mySwiper"
//         >
//           {/* Slides */}
//           <SwiperSlide className='shadow-2xl bg-transparent py-8 px-4 md:m-5 rounded-lg border'>
//             <div className='space=y-6'>
//               <div className='mt-5'>
//                 <img src="/toopers.jpg" alt="Academic" />
//                 <h3 className='text-lg font-medium'>Academic</h3>
//                 <p className='text-base'>Rank Holders</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
//             <div className='space=y-6'>
//               <div className='mt-5'>
//                 <img src="/exhibition.jpg" alt="Exhibitions" />
//                 <h3 className='text-lg font-medium'>Exhibitions</h3>
//                 <p className='text-base'>Science Tech Exploration</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
//             <div className='space=y-6'>
//               <div className='mt-5'>
//                 <img src="/ed.jpg" alt="Science and Tech" />
//                 <h3 className='text-lg font-medium'>Science and Tech</h3>
//                 <p className='text-base'>Exploration in Space</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           {/* Add more SwiperSlide components as needed */}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Reviews;
