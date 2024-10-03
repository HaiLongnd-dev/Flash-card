import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({ width = 27, height = 27, stroke = '#4A0E5C' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M26 23.5307V13.8683C26.0001 13.1961 25.8612 12.5309 25.5919 11.9136C25.3226 11.2962 24.9285 10.7396 24.4337 10.278L15.2175 1.67496C14.7533 1.24151 14.1388 1 13.5 1C12.8612 1 12.2467 1.24151 11.7825 1.67496L2.56625 10.278C2.07153 10.7396 1.67744 11.2962 1.40812 11.9136C1.1388 12.5309 0.999928 13.1961 1 13.8683V23.5307C1 24.1856 1.26339 24.8137 1.73223 25.2768C2.20107 25.7398 2.83696 26 3.5 26H23.5C24.163 26 24.7989 25.7398 25.2678 25.2768C25.7366 24.8137 26 24.1856 26 23.5307Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default HomeIcon;
