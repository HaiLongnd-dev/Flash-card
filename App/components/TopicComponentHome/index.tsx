import React from 'react';
import TopicComponentHomeView from './view';
import { TTopic } from '../../types/Topic';
interface TopicComponentHomeProps {
  topic:TTopic
}
const TopicComponentHome = ({topic}: TopicComponentHomeProps) => {
  return <TopicComponentHomeView topic={topic}/>;
};

export default TopicComponentHome;
