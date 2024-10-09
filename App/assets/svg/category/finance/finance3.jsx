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
      d="m.291 8.552a2.443 2.443 0 0 1 .153-2.566 4.716 4.716 0 0 1 1.668-1.5l7.501-3.904a5.174 5.174 0 0 1 4.774 0l7.5 3.907a4.716 4.716 0 0 1 1.668 1.5 2.443 2.443 0 0 1 .153 2.566 2.713 2.713 0 0 1 -2.416 1.445h-18.584a2.713 2.713 0 0 1 -2.417-1.448zm22.709 13.448a2 2 0 0 0 -2-2v-8h-2v8h-3v-8h-2v8h-4v-8h-2v8h-3v-8h-2v8a2 2 0 0 0 -2 2 1 1 0 0 0 0 2h22a1 1 0 0 0 0-2z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
