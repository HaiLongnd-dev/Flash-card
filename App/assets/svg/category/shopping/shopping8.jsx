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
      d="m16,11.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm3,0c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5,1.5ZM11,2h.316c.488,0,.903.349.986.83l.637,3.681c.248,1.443,1.491,2.49,2.956,2.49h4.429c1.319,0,2.47-.845,2.862-2.102l.722-2.299c.192-.614.085-1.264-.296-1.783-.381-.519-.969-.816-1.612-.816h-7.854c-.416-1.184-1.537-2-2.83-2h-.316c-.552,0-1,.448-1,1s.448,1,1,1Zm9.5,13c-1.28,0-2.39-.698-3-1.726-.61,1.028-1.72,1.726-3,1.726-1.93,0-3.5-1.57-3.5-3.5,0-.935.374-1.781.974-2.41-.501-.636-.861-1.394-1.006-2.241l-.501-2.896c-1.066-.193-1.935-.952-2.291-1.953h-3.175C2.243,2,0,4.243,0,7v8c0,2.757,2.243,5,5,5h6v2h-4c-.552,0-1,.448-1,1s.448,1,1,1h10c.553,0,1-.448,1-1s-.447-1-1-1h-4v-2h6c2.757,0,5-2.243,5-5v-3.5c0,1.93-1.57,3.5-3.5,3.5Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;