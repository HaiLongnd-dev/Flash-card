import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../../themes/color';
const SVGComponent = (size = 25, color = colors.red) => (
  <Svg
    width={size}
    height={size + 1}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M10.0041 4.4947V3.78865C10.0041 2.24865 8.79074 1 7.29422 1H3.70918C2.2134 1 1 2.24865 1 3.78865V12.2114C1 13.7514 2.2134 15 3.70918 15H7.30157C8.79368 15 10.0041 13.7551 10.0041 12.2197V11.5061"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      stroke={color}
      d="M13.9999 7.99996H5.14502"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.8467 5.79395L13.9999 7.99989L11.8467 10.2066"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
