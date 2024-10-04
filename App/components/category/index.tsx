import React from 'react';
import CategoryComponentView from './view';
interface categoryComponentProps {
  icon: any;
  title: string;
  categoryScreen: string;
}
const Category = ({icon, title, categoryScreen}: categoryComponentProps) => {
  return (
    <CategoryComponentView
      icon={icon}
      title={title}
      categoryScreen={categoryScreen}
    />
  );
};

export default Category;
