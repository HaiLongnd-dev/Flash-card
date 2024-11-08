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
      d="M22,10a12.64,12.64,0,0,1-5,9.775V23a1,1,0,0,1-2,0V2A1.9,1.9,0,0,1,16.131.217a2.194,2.194,0,0,1,2.356.459A13.474,13.474,0,0,1,22,10ZM11,0a1,1,0,0,0-1,1V7A3,3,0,0,1,8,9.816V1A1,1,0,0,0,6,1V9.816A3,3,0,0,1,4,7V1A1,1,0,0,0,2,1V7a5.009,5.009,0,0,0,4,4.9V23a1,1,0,0,0,2,0V11.9A5.009,5.009,0,0,0,12,7V1A1,1,0,0,0,11,0Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
