import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styleSlider from "../styles/Slider.module.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import Nivus from "../assets/Nivus.jpg"
import FasterBack from "../assets/fiat fasterBack.jpg"
import HRV from "../assets/HRV.jpg"
import FiatTORO from "../assets/Fiat TORO.webp"


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';






export default function SliderCarros(){


   const carrosSlide = [{id:1, imagem: Nivus}, {id:2, imagem: FasterBack}, {id:3, imagem: HRV}, {id:4, imagem: FiatTORO}  ]

    return(

        <>
        
       <Swiper
       
       modules={[Navigation, Pagination, Scrollbar, A11y]}
     
       slidesPerView={1}
       navigation
       
       >

        {
       carrosSlide.map((item) => {

        return(

            <SwiperSlide>
               
               <div key={item.id}>
                <img className={styleSlider.imagemCarro} src={item.imagem} alt="ImagemSlider" />
               </div>

            </SwiperSlide>
        )
       })

        }



       </Swiper>

        </>
    )
}