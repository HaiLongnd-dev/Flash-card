import * as React from 'react';
import Svg, {Line} from 'react-native-svg';
const SVGComponent = ({size = 40}) => (
  <Svg
    width={1}
    height={size}
    viewBox="0 0 1 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Line
      opacity={0.5}
      x1={0.5}
      y1={2.18557e-8}
      x2={0.499998}
      y2={size}
      stroke="#4A0E5C"
      strokeOpacity={0.5}
    />
  </Svg>
);
export default SVGComponent;
