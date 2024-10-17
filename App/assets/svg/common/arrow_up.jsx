import {colors} from '../../../themes';
import * as React from 'react';
import {Path, Svg} from 'react-native-svg';
const SVGComponent = ({size = 25, color = colors.black}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M19.2499 16.914L12.2499 9.914L5.24994 16.914L3.83594 15.5L12.2499 7.086L20.6639 15.5L19.2499 16.914Z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill={color}
    />
  </Svg>
);
export default SVGComponent;
