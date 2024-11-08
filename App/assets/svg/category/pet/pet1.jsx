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
      d="m24,6v4c0,2.206-1.794,4-4,4h-1.311c-.378-.286-1.594-.92-1.689-.967v-4.033h-2c-2.433,0-4.465,1.746-4.91,4.05-3.263,2.043-6.698,5.153-7.055,10.95H0v-14h6.954l4.046-6.294v-.706c0-1.657,1.343-3,3-3v3h1.227c1.425,0,2.765.628,3.676,1.722l.229.275c.531.637,1.311,1.002,2.14,1.002h2.727Zm-7.424,9.056c-.214-.099-.859-.453-1.576-.724v-3.332c-1.657,0-3,1.343-3,3v.261c-3.029,1.711-6.578,4.403-6.961,9.739h12.829c.982,0,1.819-.713,1.975-1.683l.281-1.746s-1.159-1.899-1.228-2.439c-.192-1.514-.997-2.464-2.319-3.077Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
