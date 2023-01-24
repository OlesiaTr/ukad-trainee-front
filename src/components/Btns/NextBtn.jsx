// Assets
import icon from '../../assets/imgs/Mask.png';

// Styles
import { Ellipse, Btn } from './NextBtn.styled';

export const NextBtn = () => {
  return (
    <Btn className="next">
      <Ellipse>
        <img src={icon} alt="next button" />
      </Ellipse>
    </Btn>
  );
};
