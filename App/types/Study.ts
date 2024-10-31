export enum DayOfWeek {
  Sun = 0,
  Mon = 1,
  Tues = 2,
  Wed = 3,
  Thurs = 4,
  Fri = 5,
  Sat = 6,
}
export type TStudySession = {
  id: number;
  startTime: number;
  isStudying: boolean;
  date: DayOfWeek;
};
export type TStudyHistory = {
  totalStudyTime: number;
  studyRecord: {date: DayOfWeek; timeStudied: number}[];
};
