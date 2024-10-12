import React from 'react';
import TopicComponentHomeView from './view';
interface TopicComponentHomeProps {
  icon: any;
  title: string;
}
const TopicComponentHome = ({icon, title}: TopicComponentHomeProps) => {
  return <TopicComponentHomeView icon={icon} title={title} />;
};

export default TopicComponentHome;
