import {DayOfWeek, TStudySession, RecordValue} from '../../types/Study';

export const handlerStudyTime = (
  listRecord: TStudySession[],
): TStudySession => {
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  let currentDayOfWeekValue = listRecord.filter(
    rec => rec.date === DayOfWeek[dayIndex],
  )[0];
  console.log(
    'currentDayOfWeekValue in handlerStudyTime',
    currentDayOfWeekValue,
  );

  if (currentDayOfWeekValue.records.length === 0) {
    currentDayOfWeekValue = {
      ...currentDayOfWeekValue,
      records: [
        {
          startTime: new Date(),
          endTime: null,
        },
      ],
    };
  } else {
    currentDayOfWeekValue = {
      ...currentDayOfWeekValue,
      records: [
        ...currentDayOfWeekValue.records,
        {
          startTime: new Date(),
          endTime: null,
        },
      ],
    };
  }

  return currentDayOfWeekValue;
};

export const getTotalStudyHours = (listRecord: TStudySession[]): number => {
  const totalTime = listRecord.reduce((outerTotal, session) => {
    const sessionTotal = session.records.reduce((recordTotal, record) => {
      const {startTime, endTime} = record;
      if (endTime) {
        const duration =
          (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60);
        return recordTotal + duration;
      }
      return recordTotal;
    }, 0);
    return outerTotal + sessionTotal;
  }, 0);

  return parseFloat(totalTime.toFixed(2));
};
export const handlerStopSession = (
  shouldStopSession: TStudySession,
): TStudySession => {
  let stopSession = shouldStopSession;

  if (stopSession.records.length === 0) {
    stopSession = {
      ...stopSession,
      records: [
        {
          startTime: stopSession.records[0].startTime,
          endTime: new Date(),
        },
      ],
    };
  } else {
    let listRecord: RecordValue[] = stopSession.records.map(rec =>
      rec.endTime === null ? {...rec, endTime: new Date()} : rec,
    );

    stopSession = {
      ...stopSession,
      records: listRecord,
    };
  }
  return stopSession;
};

export const getFinalStudyTime = (listRecord: TStudySession[]): number => {
  const totalTime = listRecord.reduce((outerTotal, innerArray) => {
    const innerTotal = innerArray.records.reduce((innerSum, item) => {
      const {startTime, endTime} = item;
      return innerSum + (endTime.getTime() - startTime.getTime());
    }, 0);
    return outerTotal + innerTotal;
  }, 0);
  const hoursRemaining = totalTime / (1000 * 60 * 60);

  return hoursRemaining;
};
