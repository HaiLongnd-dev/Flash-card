import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const SVGComponent = ({size, color}) => (
  <Svg
    id="Uploaded to svgrepo.com"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    xmlSpace="preserve">
    <Path
      fill={color}
      className="bentblocks_een"
      d="M16,4c-2.45,0-3.78,2.086-4.967,3.478C10.319,8.315,8.835,9,7.735,9H6c-1.1,0-2,0.9-2,2v10 c0,1.1,0.9,2,2,2h1.735c1.1,0,2.584,0.685,3.298,1.522C12.226,25.92,13.546,28,16,28c1.1,0,2-0.9,2-2V6C18,4.9,17.1,4,16,4z  M8,21.017C7.912,21.013,6,21,6,21V11c0,0,1.912,0.005,2,0V21.017z M16,26c-1.389,0-2.25-1.375-3.445-2.776 c-0.627-0.735-1.558-1.347-2.555-1.744V10.52c0.997-0.397,1.928-1.009,2.555-1.744C13.742,7.384,14.605,6,16,6V26z M24.456,24.555 l-1.418-1.418c3.95-3.95,3.947-10.327,0-14.274l1.418-1.418C29.185,12.174,29.177,19.833,24.456,24.555z M20.874,10.867 c2.837,2.837,2.833,7.433,0,10.266l-1.416-1.416c2.057-2.057,2.055-5.378,0-7.434L20.874,10.867z"
    />
  </Svg>
);
export default SVGComponent;
