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
      d="M22.432,11.046c-.338-.846-.824-1.636-1.432-2.327v-3.715c0-.618-.278-1.192-.764-1.576-.478-.377-1.089-.513-1.681-.374-1.825,.435-3.194,1.469-3.927,2.946h-5.363c-2.581,0-4.898,1.158-6.419,2.969-1.2-.175-1.055-1.971,.153-1.969,1.307-.005,1.308-1.995,0-2-3.185-.01-4.129,4.406-1.268,5.709-1.759,3.62-.229,8.282,3.268,10.212v.079c.002,3.351,4.74,4.118,5.829,1h2.343c1.089,3.12,5.827,2.349,5.829-1v-.092c1.56-.903,2.771-2.3,3.432-3.954,.821-.175,1.568-.848,1.568-1.954v-2c0-1.106-.748-1.779-1.568-1.954Zm-4.432,1.954c-1.308-.006-1.308-1.994,0-2,1.308,.006,1.308,1.994,0,2ZM6.052,4.512c-.562-5.591,7.74-6.132,7.948-.512h-4.734c-1.121,0-2.2,.185-3.214,.512Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
