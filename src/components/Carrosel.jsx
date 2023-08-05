"use client"

import {Swiper , SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Carrosel () {
    
    let images = [
        {
            image:"https://i.pinimg.com/564x/f6/62/af/f662af3b9a1cd3cf54d5ce49295bb25c.jpg",
            alt:"Image-1"
        },
        {
            image:"https://i.pinimg.com/564x/30/c3/aa/30c3aa246a49e0501c0911f28a63be6f.jpg",
            alt:"Image-2"
        },
        {
            image:"https://i.pinimg.com/564x/85/d6/2f/85d62f27ced8cc02830c76255a522321.jpg",
            alt:"Image-3"
        }
    ]

    return(
            <Swiper className='z-0' navigation={true} modules={[Navigation]}>
            {images.map((obj) => {
                return (
                    <SwiperSlide key={obj.alt}><img className='w-full h-96 object-fill'  src={obj.image} alt={obj.alt} /></SwiperSlide>
                )
            })}
            </Swiper>
    )
}

















