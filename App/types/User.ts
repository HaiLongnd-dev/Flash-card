import {TStudySession} from './Study';
import {TTopic} from './Topic';

export type TUser = {
  id?: number;
  avatar?: string;
  pass?: string;
  topicAdded?: TTopic[];
  timeStudied?: TStudySession[];
};
