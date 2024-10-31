import { DayOfWeek, TStudySession } from "../../types/Study";

export const handlerStudyTime = (): TStudySession => {
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();

    const newStudy: TStudySession = {
        id: Math.random() * 1000000,
        record: {
            startTime: new Date()
        },
        date: DayOfWeek[dayIndex]
    }

    return newStudy
}

export const getFinalStudyTime = (studySession: TStudySession): number => {
    const diffInMs = studySession.record.endTime.getTime() - studySession.record.startTime.getTime()
    const hoursRemaining = diffInMs / (1000 * 60 * 60);

    return hoursRemaining;
}