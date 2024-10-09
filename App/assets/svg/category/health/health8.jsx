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
      d="m24 19v-15a3 3 0 0 0 -3-3h-18a3 3 0 0 0 -3 3v15h11v2h-5v2h12v-2h-5v-2zm-14.965-8h-6.035v-2h4.965l2.659-3.988 3 6 1.341-2.012h6.035v2h-4.965l-2.659 3.988-3-6z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
