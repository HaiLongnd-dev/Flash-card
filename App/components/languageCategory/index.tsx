import React from 'react';
import CategoryComponentView from './view';
interface categoryComponentProps {
  icon: any;
  title: string;
}
const LanguageCategory = ({icon, title}: categoryComponentProps) => {
  return <CategoryComponentView icon={icon} title={title} />;
};

export default LanguageCategory;
