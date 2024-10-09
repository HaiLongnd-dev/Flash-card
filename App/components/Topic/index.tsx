import React from 'react';
import TopicView from './view';
import {SvgName} from '../../assets/svg';
interface TopicProps {
  icon?: SvgName;
  title: string;
}
const Topic = ({icon, title}: TopicProps) => {
  return <TopicView icon={icon} title={title} />;
};

export default Topic;
