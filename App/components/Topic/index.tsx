import React from 'react';
import TopicView from './view';
import {SvgName} from '../../assets/svg';
import { TTopic } from '../../types/Topic';
interface TopicProps {
  topic:TTopic
}
const Topic = ({topic}: TopicProps) => {
  return <TopicView topic={topic} />;
};

export default Topic;
