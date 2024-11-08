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
      d="m19,4H4v-2c0-1.103.897-2,2-2h11c1.103,0,2,.897,2,2v2Zm-6,8H1v9c0,1.654,1.346,3,3,3h10.026c-.635-.838-1.026-1.87-1.026-3v-9Zm3.324-6H3.714l-2.593,4h11.984l3.218-4Zm2.676,0l-4,4.88v10.12c0,1.654,1.346,3,3,3h2c1.654,0,3-1.346,3-3v-10.487l-4-4.513Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
