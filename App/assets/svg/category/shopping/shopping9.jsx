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
      d="M20,11H10c-2.206,0-4,1.794-4,4v4c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5v-4c0-2.206-1.794-4-4-4Zm-1,5c0,2.206-1.794,4-4,4s-4-1.794-4-4v-1c0-.553,.448-1,1-1s1,.447,1,1v1c0,1.103,.897,2,2,2s2-.897,2-2v-1c0-.553,.448-1,1-1s1,.447,1,1v1Zm0-7c0-2.206-1.794-4-4-4h-1v-.5c0-2.481-2.019-4.5-4.5-4.5S5,2.019,5,4.5v.5h-1C1.794,5,0,6.794,0,9v5c0,2.414,1.721,4.435,4,4.899v-3.899c0-3.309,2.691-6,6-6h9ZM7,4.5c0-1.379,1.122-2.5,2.5-2.5s2.5,1.121,2.5,2.5v.5H7v-.5Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
