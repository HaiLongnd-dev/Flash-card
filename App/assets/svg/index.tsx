import React from 'react';
import {SVG_LIST} from './svgList';
import { colors } from '../../themes/color';

export type SvgName = keyof typeof SVG_LIST;

interface SvgComponentProps {
  name: SvgName;
  size?: number;
  color?: string;
}

function SvgComponent({name, size = 24, color = colors.white}: SvgComponentProps) {
  let SvgIcon = SVG_LIST[name];

  if (!SvgIcon) {
    console.error(`SVG component with name ${name} not found.`);
    return null;
  }

  return <SvgIcon size={size} color={color} />;
}

export default SvgComponent;
