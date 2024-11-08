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
      d="m18 0a12.792 12.792 0 0 0 -3.915.615 7.037 7.037 0 0 1 -2.085.385 7.037 7.037 0 0 1 -2.085-.385 12.8 12.8 0 0 0 -3.915-.615 5.785 5.785 0 0 0 -6 6c0 6.443 3.355 12.786 5.768 16.885a2.275 2.275 0 0 0 4.232-1.159v-6.619a2.075 2.075 0 0 1 1.664-2.08 2 2 0 0 1 2.336 1.973v6.726a2.275 2.275 0 0 0 4.232 1.159c2.414-4.1 5.768-10.443 5.768-16.885a5.785 5.785 0 0 0 -6-6z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
