import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';
import {getStudySessionsByWeek} from '../../../redux/selectors/studySelector';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../../components';

const TimeStudiedChart = () => {
  const getStudySessions = useSelector(getStudySessionsByWeek);
  const dataFormat = getStudySessions.map(day => {
    return {day: day.date, hours: day.totalStudiedTimeByDay};
  });
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const getDayInfo = dayIndex => {
    return {
      abbreviation: days[dayIndex],
      index: dayIndex - 1,
    };
  };

  const currentDayIndex = new Date().getDay();
  const dayInfo = getDayInfo(currentDayIndex);
  const [selectedBar, setSelectedBar] = useState(dayInfo.index);
  const daySelected = dataFormat[selectedBar].hours;
  const convertHours = (hours: number) => {
    const totalHours = Math.floor(hours);
    const totalMinutes = Math.round((hours - totalHours) * 60);
    return {totalHours, totalMinutes};
  };
  const daySelectedFormat = convertHours(daySelected);
  return (
    <View style={styles.chartBox}>
      <View style={styles.timeBox}>
        <AppText fontSize={18} color="#11144C">
          {daySelectedFormat.totalHours} hrs, {daySelectedFormat.totalMinutes}{' '}
          mins
        </AppText>
      </View>
      <View style={styles.chart}>
        <VictoryChart
          height={250}
          theme={VictoryTheme.material}
          domainPadding={20}>
          <VictoryAxis
            tickValues={getStudySessions.map((_, index) => index + 1)}
            tickFormat={getStudySessions.map(item => item.date)}
          />

          <VictoryAxis
            dependentAxis
            tickFormat={x => `${x} h`}
            offsetX={420}
            tickCount={5}
            style={{
              grid: {stroke: '#01193640'},
              axis: {stroke: 'transparent'},
              ticks: {stroke: 'transparent'},
            }}
          />

          <VictoryBar
            data={dataFormat}
            x="day"
            y="hours"
            barWidth={20}
            style={{
              data: {
                fill: ({index}) =>
                  index === selectedBar ? '#4A0E5C' : '#4A0E5C80',
              },
            }}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onPressIn: (evt, pressedProps) => {
                    setSelectedBar(pressedProps.index);
                    return null;
                  },
                },
              },
            ]}
          />
        </VictoryChart>
      </View>
    </View>
  );
};

export default TimeStudiedChart;
const styles = StyleSheet.create({
  chartBox: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {marginTop: 30},
  timeBox: {position: 'absolute', top: 40},
});
