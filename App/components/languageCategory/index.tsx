import React from 'react';
import CategoryComponentView from './view';
import {SvgName} from '../../assets/svg';
interface categoryComponentProps {
  icon?: SvgName;
  title: string;
}
const LanguageCategory = ({icon, title}: categoryComponentProps) => {
  return <CategoryComponentView icon={icon} title={title} />;
};

export default LanguageCategory;
