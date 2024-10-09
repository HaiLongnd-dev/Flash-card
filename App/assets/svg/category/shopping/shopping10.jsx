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
      d="m20.315,11.896l3.685-1.896v11c0,1.654-1.346,3-3,3h-2c-1.654,0-3-1.346-3-3v-9.906l1.513-.94,2.803,1.742Zm-6.315-.499l-2-1.242-2.757,1.712-2.756-1.713-2.803,1.742-3.685-1.896v11c0,1.654,1.346,3,3,3h12.026c-.635-.838-1.026-1.87-1.026-3v-9.603Zm-7.513-3.597l2.756,1.713,2.757-1.712.814.506c-.113-.519-.276-1.028-.494-1.52l-.896-2.033c-.282-.64-.425-1.318-.425-2.017v-.736h1V0H3v2h1v.736c0,.698-.143,1.377-.425,2.017l-.896,2.033c-.29.657-.478,1.342-.582,2.044l1.494.769,2.896-1.8Zm13.921,1.8l1.542-.794c.02-.185.049-.368.049-.556,0-1.271-.472-2.423-1.227-3.332,1.951-.38,2.877-2.128,3.1-3.108l.127-.558-.568-.065c-.336-.039-.658-.058-.965-.058-1.224,0-2.22.305-2.971.911-.507.409-.804.884-.984,1.287-.553-.199-1.141-.326-1.762-.326-1.286,0-2.449.482-3.36,1.254l.76,1.726c.267.604.475,1.244.618,1.901l.312,1.431,2.432-1.512,2.896,1.8Z"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;