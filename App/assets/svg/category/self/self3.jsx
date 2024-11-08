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
      d="m19,1.949H5C2.243,1.949,0,4.192,0,6.949v10c0,2.757,2.243,5,5,5h6.5v-2.058c-.729-.823-1.211-1.821-1.404-2.891h-4.096c-.553,0-1-.448-1-1s.447-1,1-1h4.082c.115-.717.353-1.391.698-2h-4.781c-.553,0-1-.448-1-1s.447-1,1-1h6.614c.965-.662,2.13-1.051,3.386-1.051,3.309,0,6,2.691,6,6,0,1.462-.537,2.854-1.5,3.942v1.802c2.021-.642,3.5-2.514,3.5-4.745V6.949c0-2.757-2.243-5-5-5Zm-1,7.051H6c-.553,0-1-.448-1-1s.447-1,1-1h12c.553,0,1,.448,1,1s-.447,1-1,1Zm2,7c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.255.593,2.363,1.5,3.097v4.25c0,.623.791.89,1.169.395l1.331-1.743,1.331,1.743c.378.495,1.169.228,1.169-.395v-4.25c.907-.734,1.5-1.842,1.5-3.097Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
