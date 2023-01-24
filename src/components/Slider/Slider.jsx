// Utils
import { Navigation, A11y } from 'swiper';
import PropTypes from 'prop-types';

// Components
import { Card } from 'components/Card';
import { NextBtn, PrevBtn } from 'components/Btns';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperWrapper, SliderWrapper } from './Slider.styled';

export const Slider = ({ data }) => {
  return (
    <>
      <SwiperWrapper
        modules={[Navigation, A11y]}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1340: {
            slidesPerView: 3,
            spaceBetween: 34,
          },
        }}
      >
        {data.map(({ id, ...otherProps }) => (
          <SliderWrapper key={id}>
            <Card data={otherProps} />
          </SliderWrapper>
        ))}
      </SwiperWrapper>
      <PrevBtn />
      <NextBtn />
    </>
  );
};

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
