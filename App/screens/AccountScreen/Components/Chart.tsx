import React from 'react';
import {useSelector} from 'react-redux';
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';
import {
  getStudyDate,
  getStudySessionsByWeek,
} from '../../../redux/selectors/studySelector';

const TimeStudiedChart = () => {
  const getStudySessions = useSelector(getStudySessionsByWeek);
  const dataFormat = getStudySessions.map(day => {
    return {day: day.date, hours: day.totalStudiedTimeByDay};
  });

  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryAxis
        tickValues={getStudySessions.map((_, index) => index + 1)}
        tickFormat={getStudySessions.map(item => item.date)}
        offsetX={50}
      />

      <VictoryAxis
        style={{
          axis: {stroke: 'transparent'},
          ticks: {stroke: 'transparent'},
          tickLabels: {fill: 'transparent'},
        }}
      />

      <VictoryAxis
        dependentAxis
        tickFormat={x => `${x} h`}
        offsetX={420}
        style={{
          grid: {stroke: '#01193640'},
        }}
      />

      <VictoryBar
        data={dataFormat}
        x="day"
        y="hours"
        style={{
          data: {fill: '#4A0E5C'},
        }}
        barWidth={20}
      />
    </VictoryChart>
  );
};

export default TimeStudiedChart;
