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
      d="M11,5.272a16.493,16.493,0,0,0-7.755,2.62A6.55,6.55,0,0,1,8.367,3.053,2.2,2.2,0,0,1,11,5.272Zm12.654-.023a4.529,4.529,0,0,0-3.083-1.82A4.529,4.529,0,0,0,18.751.346,1.718,1.718,0,0,0,16,1.715V7C8.483,7,4.194,8.437,1.963,12.194A13.756,13.756,0,0,1,11.8,22.043C15.561,19.813,17,15.523,17,8h5.285A1.718,1.718,0,0,0,23.654,5.249ZM19.2,13h-.475a22.8,22.8,0,0,1-.813,4h.814C21.213,17.077,22.012,13.124,19.2,13ZM9.951,22.911c-2.4.688-6.537,2.143-8.78-.082A3.983,3.983,0,0,1,.009,19.743a20.836,20.836,0,0,1,1.081-5.7A11.724,11.724,0,0,1,9.951,22.911ZM5,20a1,1,0,0,0-2,0A1,1,0,0,0,5,20Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
