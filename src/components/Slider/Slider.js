// Utils
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Components
import { Card } from 'components/Card';
import { NextBtn, PrevBtn } from 'components/Btns';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';

export const Slider = ({ data }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={34}
        slidesPerView={3}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        style={{ maxWidth: '1330px' }}
      >
        {data.map(({ id, ...otherProps }) => (
          <SwiperSlide key={id} style={{ width: '420px' }}>
            <Card data={otherProps} />
          </SwiperSlide>
        ))}
      </Swiper>
      <PrevBtn />
      <NextBtn />
    </>
  );
};
