import React from 'react';
import TopicView from './view';
import {SvgName} from '../../assets/svg';
interface TopicProps {
  icon?: SvgName;
  title: string;
  color?:string
}
const Topic = ({icon, title,color}: TopicProps) => {
  return <TopicView icon={icon} title={title} color={color} />;
};

export default Topic;
