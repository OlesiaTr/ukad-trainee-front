// Assets
import icon from '../../assets/imgs/Mask.png';

// Styles
import { Ellipse, Btn } from './PrevBtn.styled';

export const PrevBtn = () => {
  return (
    <Btn className="prev">
      <Ellipse>
        <img src={icon} alt="previous button" />
      </Ellipse>
    </Btn>
  );
};
