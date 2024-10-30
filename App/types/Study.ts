export type TStudy = {
  id?: number;
  startTime: number | null;
  isStudying?: boolean;
  studyHistory?: {date: string; time: number}[];
};
