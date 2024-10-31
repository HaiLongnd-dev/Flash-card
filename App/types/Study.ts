export enum DayOfWeek {
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
}
export type TStudySession = {
  id?: number;
  record?: {
    startTime?: Date,
    endTime?: Date
  },
  date: string;
};
// export type TStudyHistory = {
//   totalStudyTime: number;
//   studyRecord: { date: DayOfWeek; timeStudied: number }[];
// };
