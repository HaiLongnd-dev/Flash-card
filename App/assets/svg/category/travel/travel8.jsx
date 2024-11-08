import * as React from 'react';
import {memo} from 'react';
import Svg, {Path} from 'react-native-svg';
import { colors } from '../../../../themes/color';

const SvgComponent = ({size = 25, color = colors.black}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    width={size}
    height={size}>
    <Path
      fill={color}
      d="M23,2a1,1,0,0,0-1,1V4H20V3a1,1,0,0,0-2,0V5.5a2.5,2.5,0,0,0,2,2.45V17a2,2,0,0,1-2,2H16V11H14a1,1,0,0,1,0-2h2V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V9H2a1,1,0,0,1,0,2H0v8a5.006,5.006,0,0,0,5,5h6a5.008,5.008,0,0,0,4.582-3H18a4,4,0,0,0,4-4V7.95A2.5,2.5,0,0,0,24,5.5V3A1,1,0,0,0,23,2ZM10.732,11.49,8.85,14.527a1,1,0,0,1-1.7-1.054L8.683,11H6.615A1.614,1.614,0,0,1,5.07,8.917a1,1,0,0,1,.1-.234L7.148,5.476a1,1,0,1,1,1.7,1.048L7.328,9H9.4a1.6,1.6,0,0,1,1.336,2.49Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
