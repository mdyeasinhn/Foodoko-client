// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import bgImg1 from '../../../assets/img/img2.jpg'
import bgImg2 from '../../../assets/img/img1.jpg'
import bgImg3 from '../../../assets/img/img3.jpg'

export default function Banner() {
    return (
        <div className='container  mx-auto px-6 py-10 rounded-lg'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide image={bgImg1} text="True & memorable taste made with love and tradition"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgImg2} text="True & memorable taste made with love and tradition"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={bgImg3} text="True & memorable taste made with love and tradition."/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
