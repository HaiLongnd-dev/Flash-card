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
      d="m22,6v1h.5c.828,0,1.5.672,1.5,1.5v2c0,.828-.672,1.5-1.5,1.5h-.5v1h.5c.828,0,1.5.672,1.5,1.5v2c0,.828-.672,1.5-1.5,1.5h-14.5V0h12c.74,0,1.386.402,1.732,1h.768c.828,0,1.5.672,1.5,1.5v2c0,.828-.672,1.5-1.5,1.5h-.5ZM2,22c0,1.105.895,2,2,2h18v-4H4c-1.105,0-2,.895-2,2Zm4-4V0h-1c-1.657,0-3,1.343-3,3v15.765c.549-.494,1.262-.766,2-.765h2Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
