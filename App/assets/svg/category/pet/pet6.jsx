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
      d="m3.5,17h-1.71c-1.131-1.726-1.79-3.786-1.79-6v-4c0-.552.448-1,1-1s1,.448,1,1c0,2.209,1.791,4,4,4,.732,0,1.41-.211,2-.555v2.055c0,2.481-2.019,4.5-4.5,4.5ZM24,7.25c0,.455-.271.866-.689,1.045l-1.311.562v2.143c0,5.024-3.39,9.263-8,10.574v1.426c0,.552-.448,1-1,1s-1-.448-1-1v-1.051c-.33.03-.662.051-1,.051s-.67-.021-1-.051v1.051c0,.552-.448,1-1,1s-1-.448-1-1v-1.426c-1.717-.488-3.264-1.384-4.531-2.574h.031c3.59,0,6.5-2.91,6.5-6.5v-6.263C10,3.003,12.456.173,15.686.008c3.332-.17,6.1,2.381,6.296,5.627l1.329.57c.418.179.689.59.689,1.045Zm-6-1.75c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
