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
      d="M23.297,9.034c-.57-.657-1.396-1.034-2.267-1.034h-.086C20.445,3.506,16.625,0,12,0S3.555,3.506,3.056,8h-.056c-.87,0-1.695,.377-2.266,1.034S-.093,10.562,.03,11.425l1.061,7.424c.42,2.937,2.974,5.151,5.94,5.151h9.969c2.966,0,5.52-2.215,5.94-5.151l1.061-7.424c.123-.862-.134-1.733-.704-2.391ZM12,2c3.52,0,6.441,2.613,6.928,6H5.072c.487-3.387,3.408-6,6.928-6Zm-4,17c0,.553-.447,1-1,1s-1-.447-1-1v-6c0-.553,.447-1,1-1s1,.447,1,1v6Zm5,0c0,.553-.447,1-1,1s-1-.447-1-1v-6c0-.553,.447-1,1-1s1,.447,1,1v6Zm5,0c0,.553-.447,1-1,1s-1-.447-1-1v-6c0-.553,.447-1,1-1s1,.447,1,1v6Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
