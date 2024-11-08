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
      d="m23.447.105c-.34-.17-.746-.133-1.047.095l-1.69,1.267c-.677-.299-1.424-.467-2.21-.467s-1.533.169-2.21.467l-1.69-1.267c-.303-.228-.709-.265-1.047-.095-.339.169-.553.516-.553.895v5.5c0,3.033,2.467,5.5,5.5,5.5s5.5-2.467,5.5-5.5V1c0-.379-.214-.725-.553-.895Zm.553,22.894h0c0,.553-.448,1-1,1h-5v-2c0-2.915-2.089-5.351-4.848-5.889-.601-.117-1.152.378-1.152.991v.004c0,.485.353.88.828.981,1.809.383,3.172,1.992,3.172,3.914v2H6.558c-3.224,0-6.558-2.058-6.558-5.5,0-2.135.945-3.659,1.779-5.004.655-1.056,1.221-1.969,1.221-2.996,0-1.135-.277-2.195-2.107-2.445-.504-.069-.893-.482-.893-.99,0-.593.519-1.074,1.107-.997,3.357.44,3.893,2.905,3.893,4.432,0,1.597-.773,2.844-1.521,4.051-.76,1.226-1.479,2.384-1.479,3.949,0,1.791,1.467,2.851,2.997,3.279.007-1.299.364-7.986,6.719-11.077.159-.07.307-.131.456-.193,1.332,2.094,3.667,3.491,6.328,3.491,1.264,0,2.454-.317,3.5-.872v8.872h1c.552,0,1,.448,1,1Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
