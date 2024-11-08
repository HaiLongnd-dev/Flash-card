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
      d="m7,18H2V4c0-1.103.897-2,2-2h1c0,1.103.897,2,2,2h4c1.103,0,2-.897,2-2v-1c0-.552-.447-1-1-1H4C1.794,0,0,1.794,0,4v18c0,1.103.897,2,2,2h2c1.103,0,2-.897,2-2v-2h1c.553,0,1-.448,1-1s-.447-1-1-1Zm17-7v2h-6.5v-4c0-.552-.447-1-1-1s-1,.448-1,1v4h-6.5v-2c0-2.757,2.243-5,5-5h5c2.757,0,5,2.243,5,5Zm-3,5c0,.552-.447,1-1,1s-1-.448-1-1v-1h-5v1c0,.552-.447,1-1,1s-1-.448-1-1v-1h-3v1c0,1.474.81,2.75,2,3.444v2.556h-1c-.553,0-1,.448-1,1s.447,1,1,1h13c.553,0,1-.448,1-1s-.447-1-1-1h-1.5v-2.297c1.464-.595,2.5-2.028,2.5-3.703v-1h-3v1Zm-8,6v-2h6.5v2h-6.5Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
