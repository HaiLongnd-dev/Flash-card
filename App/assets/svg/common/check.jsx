import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../themes/color';
const SVGComponent = ({size = 25, color = colors.black}) => (
  <Svg
    fill={colors.black}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    id="check"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    >
    <Path
      fill={color}
      id="primary"
      d="M10,18a1,1,0,0,1-.71-.29l-5-5a1,1,0,0,1,1.42-1.42L10,15.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,10,18Z"
      style={{
        fill: 'rgb(0, 0, 0)',
      }}
    />
  </Svg>
);
export default SVGComponent;
