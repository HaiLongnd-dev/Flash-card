import {StyleProp, TextStyle, TextProps, Text} from 'react-native';
import {colors, colorType} from '../../themes/color';
import {AppFonts} from '../../themes/fonts';

interface IAppText extends TextProps {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  children: React.ReactNode;
  fontWeight?: keyof typeof AppFonts;
  lineHeight?: number;
  style?: StyleProp<TextStyle>;
  align?: 'left' | 'center' | 'right';
}

export const AppText = ({
  children,
  fontWeight = 400,
  fontSize = 14,
  color = colors.text,
  lineHeight,
  style,
  align = 'left',
  ...restProps
}: IAppText) => {
  const textStyles = {
    fontFamily: AppFonts[fontWeight],
    color,
    fontSize,
    textAlign: align,
    lineHeight,
  };
  return <Text style={[textStyles, style]}>{children}</Text>;
};
