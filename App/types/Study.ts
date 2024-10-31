export const DayOfWeek = {
  Sunday: "Sunday", Monday: "Monday", Tuesday: "Tuesday", Wednesday: "Wednesday", Thursday: "Thursday", Friday: "Friday", Saturday: "Saturday"
}

export type RecordValue = {
  startTime?: Date,
  endTime?: Date
}

export type TStudySession = {
  id?: number;
  records: RecordValue[]
  date: keyof typeof DayOfWeek;
};
// export type TStudyHistory = {
//   totalStudyTime: number;
//   studyRecord: { date: DayOfWeek; timeStudied: number }[];
// };
