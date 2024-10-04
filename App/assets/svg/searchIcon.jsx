import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SearchIcon = () => {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle with search path */}
      <Path
        d="M16 16L12.4584 12.4521L16 16ZM14.4211 7.71053C14.4211 9.49027 13.7141 11.1971 12.4556 12.4556C11.1971 13.7141 9.49027 14.4211 7.71053 14.4211C5.93078 14.4211 4.22394 13.7141 2.96547 12.4556C1.707 11.1971 1 9.49027 1 7.71053C1 5.93078 1.707 4.22394 2.96547 2.96547C4.22394 1.707 5.93078 1 7.71053 1C9.49027 1 11.1971 1.707 12.4556 2.96547C13.7141 4.22394 14.4211 5.93078 14.4211 7.71053V7.71053Z"
        stroke="#11144C"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default SearchIcon;
