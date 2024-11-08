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
      d="m15.288,4.203c-.388-.393-.384-1.026.009-1.414l2.204-2.177c.817-.814,2.148-.815,2.97.004l2.227,2.168c.396.385.404,1.018.02,1.414-.196.201-.456.302-.717.302-.252,0-.503-.094-.697-.284l-1.303-1.268v6.052c0,.552-.447,1-1,1s-1-.448-1-1V2.93l-1.297,1.281c-.394.388-1.025.385-1.415-.009Zm8.712,6.797v10c0,1.654-1.346,3-3,3H5c-2.757,0-5-2.243-5-5v-10c0-.887.232-1.721.639-2.444.02-.04.042-.079.067-.116.874-1.46,2.472-2.44,4.294-2.44h7c.553,0,1,.448,1,1s-.447,1-1,1h-7c-.887,0-1.686.387-2.235,1.001.563.627,1.376.999,2.235.999h11v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-.816c1.161.414,2,1.514,2,2.816Zm-4,5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
