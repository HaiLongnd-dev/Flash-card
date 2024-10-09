import * as React from 'react';
import {memo} from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
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
      d="M19,3H5A5.006,5.006,0,0,0,0,8H24A5.006,5.006,0,0,0,19,3Z"
    />
    <Path
      fill={color}
      d="M0,16a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10H0Zm7-.5A1.5,1.5,0,1,1,5.5,14,1.5,1.5,0,0,1,7,15.5"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
