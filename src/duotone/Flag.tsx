/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function Flag(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      fill={props.color}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M39.99951,168.00452c64-48,112,48,176,0v-120c-64,48-112-48-176,0Z"
        opacity={0.2}
      />
      <Line
        x1={40}
        y1={216.00452}
        x2={40}
        y2={48.00452}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        d="M39.99951,168.00452c64-48,112,48,176,0v-120c-64,48-112-48-176,0"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default Flag;
