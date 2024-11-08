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
      d="M5,23a5,5,0,1,1,5-5A5.006,5.006,0,0,1,5,23Zm14,0a5,5,0,1,1,5-5A5.006,5.006,0,0,1,19,23Zm-6-5V14a1,1,0,0,0-.348-.758l-2.287-1.965a.986.986,0,0,1-.348-.744.967.967,0,0,1,.273-.708l1.964-1.563a1.008,1.008,0,0,1,1.418.067l2.6,2.4a1,1,0,0,0,.679.266H20a1,1,0,0,0,0-2H17.34L15.063,6.893a2.973,2.973,0,0,0-4.105-.153L8.994,8.3a3,3,0,0,0,.068,4.491L11,14.459V18a1,1,0,0,0,2,0ZM16.5,1A2.5,2.5,0,1,0,19,3.5,2.5,2.5,0,0,0,16.5,1Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
