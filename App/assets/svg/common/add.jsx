import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../themes/color';
const SVGComponent = ({size = 50, color = colors.white}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"
      fill={color}
    />
  </Svg>
);
export default SVGComponent;
