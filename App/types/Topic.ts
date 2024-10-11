import {SvgName} from '../assets/svg';
import {TCard} from './Card';

export type TTopic = {
  id: number;
  icon?: SvgName;
  iconColor?: string;
  title: string;
  card?: TCard[];
};
