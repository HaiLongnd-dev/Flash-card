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
      d="m15,5h-6v-2c0-1.654,1.346-3,3-3h7.238c.791,0,1.558.232,2.218.671l2.503,1.669-1.109,1.664-2.502-1.668c-.33-.22-.714-.336-1.109-.336h-4.238v3Zm.826,2h-7.651c-2.513,1.384-4.174,4.057-4.174,7v10h16v-10c0-2.943-1.661-5.616-4.174-7Zm.174,10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;