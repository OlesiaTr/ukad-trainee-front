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
    height: 20px;
    transform: rotate(180deg);
  }
`;

export const Btn = styled.div`
  position: absolute;
  top: 50%;
  left: -8%;
  transform: translate(50%, -50%);
  z-index: 2;

  cursor: pointer;

  @media (min-width: 375px) {
    left: -15%;
  }

  @media (min-width: 768px) {
    left: -10%;
  }

  @media (min-width: 1024px) {
    left: -8%;
  }

  @media (min-width: 1330px) {
    left: -5%;
  }

  &.swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }
`;
