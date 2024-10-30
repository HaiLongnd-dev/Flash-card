import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../themes/color';
const SVGComponent = ({size = 25, color = colors.white}) => (
  <Svg
    fill="#000000"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    id="lightning"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color">
    <Path
      id="primary"
      d="M18,11.74a1,1,0,0,0-.52-.63L14.09,9.43,15,3.14a1,1,0,0,0-1.78-.75l-7,9a1,1,0,0,0-.18.87,1.05,1.05,0,0,0,.6.67l4.27,1.71L10,20.86a1,1,0,0,0,.63,1.07A.92.92,0,0,0,11,22a1,1,0,0,0,.83-.45l6-9A1,1,0,0,0,18,11.74Z"
      fill={color}
    />
  </Svg>
);
export default SVGComponent;
