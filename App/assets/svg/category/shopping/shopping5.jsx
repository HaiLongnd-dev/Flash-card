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
      d="m22,15v-.5c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5v.5h-1.882l.945,6.436c.214,1.462,1.49,2.564,2.968,2.564h4.944c1.478,0,2.753-1.103,2.968-2.564l.946-6.436h-1.889Zm-7-.5c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5v.5h-5v-.5Zm9-7.5V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v4h24ZM7.5,2c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-4,0c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm17.448,7h3.052v4h-.182c-.399-1.68-1.449-3.106-2.87-4Zm-10.798,13H0v-13h14.052c-1.421.894-2.471,2.32-2.87,4h-2.379l1.282,8.726c.014.095.047.182.067.274Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
