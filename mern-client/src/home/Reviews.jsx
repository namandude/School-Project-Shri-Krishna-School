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
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'> Achievements</h2>
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
                    <img src="https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/434149139_933070834936754_8163954356445880134_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=nsajWS5xnc0Q7kNvgGBDpJN&_nc_ht=scontent.fbho1-4.fna&oh=00_AYB4XTnpb69NNPOExxaVbPYRUCPH-_BsXngmcK6xVaizFQ&oe=668015BA" alt="" />
                <h3 className='text-lg font-medium'>Academic</h3>
                <p className='text-base'>Rank Holders</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/432758385_923248829252288_7965401679146061214_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=27l-t9qNRMoQ7kNvgEMXvLb&_nc_ht=scontent.fbho1-3.fna&oh=00_AYBI3PsBjdls1QenOHexyPCrH7ob-NszqvQZWoH3msLepg&oe=6680458C" alt="" />
                <h3 className='text-lg font-medium'>Exhibitions</h3>
                <p className='text-base'>Science Tech Exploration</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/431283188_923249672585537_470305251247149954_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=g_ZgxjfKxyUQ7kNvgFH_djj&_nc_ht=scontent.fbho1-3.fna&oh=00_AYCuAd1Eb4ndk-HEutNmpwMlK7eEW7sRG6iEiaSNo_61Ag&oe=6680309B" alt="" />
                <h3 className='text-lg font-medium'>Science and Tech</h3>
                <p className='text-base'>Exploration in Space</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/387874627_839282850982220_245580338748213734_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=apQ53AjKLrkQ7kNvgHAWp0i&_nc_ht=scontent.fbho1-4.fna&oh=00_AYDu1riqJUgG99ks5bKyB_FIhl-yrpsVoxggwWHCJ6qrlw&oe=6680401B" alt="" />
                <h3 className='text-lg font-medium'>Education Achievement </h3>
                <p className='text-base'>School Rank Holder</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://scontent.fbho1-1.fna.fbcdn.net/v/t39.30808-6/413889314_878462910397547_3469208609001128791_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MI_xYPygYnIQ7kNvgFPWL9f&_nc_ht=scontent.fbho1-1.fna&oh=00_AYAm2txF9pLmepul6Xbg1MojujnK3QHAnzx7CPPMITtlLg&oe=668024D6" alt="" />
                <h3 className='text-lg font-medium'>Trips and Learning</h3>
                <p className='text-base'>Learn with fun!</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space=y-6'>
               

                <div className='mt-5'>
                    <img src="https://scontent.fbho1-4.fna.fbcdn.net/v/t39.30808-6/345430613_1428585491285231_2930947670283393225_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fabyx2QeP_0Q7kNvgGGtOnN&_nc_ht=scontent.fbho1-4.fna&oh=00_AYD7WlKmBOGONY2Zfj5P_eYLsmCPFmp820Dmsavh0QoGgg&oe=6680269E" alt="" />
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

