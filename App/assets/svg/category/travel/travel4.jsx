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
      d="M13.319,8h4.362a5.01,5.01,0,0,1,4.709,3.318l.853,2.388A13.11,13.11,0,0,1,23.623,15H7.377a13.11,13.11,0,0,1,.38-1.294l.853-2.388A5.01,5.01,0,0,1,13.319,8ZM24,18.079c0-.362-.016-.721-.046-1.079H21v1a1,1,0,0,1-2,0V17H12v1a1,1,0,0,1-2,0V17H7.046A4.221,4.221,0,0,0,9,21.476V22a2,2,0,0,0,4,0h5a2,2,0,0,0,4,0v-.524A3.909,3.909,0,0,0,24,18.079ZM15.912,5.706,15.06,3.318A5.012,5.012,0,0,0,10.351,0H5.988A5.012,5.012,0,0,0,1.279,3.318L.427,5.706C.392,5.8.372,5.9.34,6H16C15.967,5.9,15.947,5.8,15.912,5.706ZM5,8V9A1,1,0,0,1,3,9V8H.046C.016,8.358,0,9.717,0,10.079a3.909,3.909,0,0,0,2,3.4V14a2.007,2.007,0,0,0,3.168,1.616l.267-1.09a14.553,14.553,0,0,1,.439-1.492l.853-2.388A6.973,6.973,0,0,1,8.43,8Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
