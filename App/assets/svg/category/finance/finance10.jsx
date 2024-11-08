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
      d="m20,2H4V0h16v2Zm-8,11c.827,0,1.5-.673,1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5,1.5.673,1.5,1.5,1.5Zm-10-3.758v-5.242h20v5.242l-7.879,7.879c-1.133,1.133-3.109,1.133-4.242,0l-7.879-7.879Zm15-1.742c0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5,1.5Zm-8.5,4c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5-3.5,1.57-3.5,3.5Zm-4.5-4c0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5,1.5Zm11.535,11.035c-.943.944-2.199,1.465-3.535,1.465s-2.592-.521-3.535-1.465L.418,10.488C.156,11.028.002,11.619.002,12.231l-.002,11.769h24v-11.772c0-.612-.154-1.202-.416-1.742l-8.048,8.048Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
