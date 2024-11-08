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
      d="m4,2.736v-.736h-1V0h9v2h-1v.736c0,.698.143,1.377.425,2.017l.896,2.033c.174.395.305.802.413,1.214H2.267c.108-.412.238-.819.413-1.214l.896-2.033c.282-.64.425-1.318.425-2.017Zm19.879,7.264l-1.763,11.456c-.226,1.474-1.473,2.544-2.965,2.544H4.849c-1.492,0-2.739-1.07-2.965-2.545L.121,10h23.759Zm-15.879,4h-2v6h2v-6Zm5,0h-2v6h2v-6Zm5,0h-2v6h2v-6Zm3.981-6c.978-2.591,1.28-4.916.758-6.332-.326-.887-.897-1.291-1.319-1.474-1.635-.71-3.595.535-5.34,2.553l2.921,1.753-1.029,1.715-3.117-1.871c-.552.799-1.065,1.651-1.513,2.517l-.077.148c-.12.232-.304.586-.508.99h9.226Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
