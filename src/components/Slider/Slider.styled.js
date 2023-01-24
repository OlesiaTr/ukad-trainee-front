// Utils
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperWrapper = styled(Swiper)`
  @media (min-width: 1360px) {
    width: 1360px;
  }

  @media (max-width: 1339px) {
    width: 860px;
  }

  @media (max-width: 1023px) {
    max-width: 720px;
  }

  @media (max-width: 767px) {
    max-width: 320px;
  }
`;

export const SliderWrapper = styled(SwiperSlide)`
  @media (min-width: 1024px) {
    max-width: 420px;
  }

  @media (max-width: 1024px) {
    width: 320px;
  }
`;
