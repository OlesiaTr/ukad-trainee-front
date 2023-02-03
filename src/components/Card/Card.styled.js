// Utils
import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 4px;
  width: 100%;
`;

export const ImgWrapper = styled.div`
  > img {
    width: 100%;
    height: 364px;
    object-fit: cover;
    object-position: top;
  }
`;

export const DescWrapper = styled.div`
  margin: 0 28px 28px;
`;

export const DogName = styled.p`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const DogDesc = styled.p`
  font-weight: 700;
  font-size: 19px;
`;
