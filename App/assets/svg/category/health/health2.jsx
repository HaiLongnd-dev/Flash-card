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
      d="m15,0h-6c-2.761,0-5,2.239-5,5v16c0,1.657,1.343,3,3,3h10c1.657,0,3-1.343,3-3V5c0-2.761-2.239-5-5-5Zm-5,19h-1c-.553,0-1-.448-1-1s.447-1,1-1h1c.553,0,1,.448,1,1s-.447,1-1,1Zm0-4h-1c-.553,0-1-.448-1-1s.447-1,1-1h1c.553,0,1,.448,1,1s-.447,1-1,1Zm2-5c-.553,0-1-.448-1-1v-1h-1c-.553,0-1-.448-1-1s.447-1,1-1h1v-1c0-.552.447-1,1-1s1,.448,1,1v1h1c.553,0,1,.448,1,1s-.447,1-1,1h-1v1c0,.552-.447,1-1,1Zm3,9h-1c-.553,0-1-.448-1-1s.447-1,1-1h1c.553,0,1,.448,1,1s-.447,1-1,1Zm0-4h-1c-.553,0-1-.448-1-1s.447-1,1-1h1c.553,0,1,.448,1,1s-.447,1-1,1Zm-13,7.974c-1.207-.914-2-2.348-2-3.974v-8c0-1.627.793-3.061,2-3.974v15.949Zm22-11.974v8c0,1.627-.793,3.061-2,3.974V7.026c1.207.914,2,2.348,2,3.974Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
