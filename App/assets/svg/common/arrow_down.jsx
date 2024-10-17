import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
import {colors} from '../../../themes/color';

const SvgComponent = ({size = 25, color = colors.black}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      fill={color}
      d="M12.2499 16.9139L3.83594 8.49994L5.24994 7.08594L12.2499 14.0859L19.2499 7.08594L20.6639 8.49994L12.2499 16.9139Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
