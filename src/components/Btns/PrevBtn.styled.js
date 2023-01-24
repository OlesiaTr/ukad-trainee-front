// Utils
import styled from 'styled-components';

export const Ellipse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffffff;
  border: 1.7px solid #f8f8f8;
  box-shadow: 0px 3.4px 17px rgba(0, 0, 0, 0.1);

  @media (min-width: 480px) {
    width: 68px;
    height: 68px;
  }

  > img {
    transform: rotate(180deg);
  }
`;

export const Btn = styled.div`
  position: absolute;
  top: 48%;
  left: 0%;
  z-index: 2;
  cursor: pointer;

  @media (min-width: 480px) {
    left: 6%;
  }

  &.swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }
`;
