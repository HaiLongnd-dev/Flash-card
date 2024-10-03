import React from 'react';
import Svg, { Circle, Path, G } from 'react-native-svg';

const AddIcon = () => {
  return (
    <Svg
      width={114}
      height={114}
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Vòng tròn bên ngoài */}
      <G>
        <Circle cx="57" cy="57" r="40" fill="white" />
      </G>
      {/* Vòng tròn bên trong */}
      <Circle cx="57" cy="57" r="30" fill="#4A0E5C" />
      {/* Dấu cộng ngang */}
      <Path
        d="M56.1279 47H57.8721C58.0271 47 58.1047 47.0741 58.1047 47.2222V66.7778C58.1047 66.9259 58.0271 67 57.8721 67H56.1279C55.9729 67 55.8954 66.9259 55.8954 66.7778V47.2222C55.8954 47.0741 55.9729 47 56.1279 47Z"
        fill="white"
      />
      {/* Dấu cộng dọc */}
      <Path
        d="M47.2326 55.9445H66.7674C66.9225 55.9445 67 56.0185 67 56.1667V57.8333C67 57.9815 66.9225 58.0556 66.7674 58.0556H47.2326C47.0775 58.0556 47 57.9815 47 57.8333V56.1667C47 56.0185 47.0775 55.9445 47.2326 55.9445Z"
        fill="white"
      />
    </Svg>
  );
};

export default AddIcon;
