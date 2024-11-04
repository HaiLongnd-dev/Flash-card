export enum DayOfWeek {
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
}

export type RecordValue = {
  startTime?: Date;
  endTime?: Date;
};

export type TStudySession = {
  id?: number;
  records: RecordValue[];
  date: keyof typeof DayOfWeek;
  totalStudiedTimeByDay?: number;
};
// export type TStudyHistory = {
//   totalStudyTime: number;
//   studyRecord: { date: DayOfWeek; timeStudied: number }[];
// };
