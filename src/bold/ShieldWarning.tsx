/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Line, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function ShieldWarning(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Path
        d="M39.99951,114.66667V56a8,8,0,0,1,8-8h160a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.30553,226.51683,39.99951,198.682,39.99951,114.66667Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Line
        x1={127.99951}
        y1={92}
        x2={127.99951}
        y2={132}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle cx={128} cy={172} r={16} fill={props.color} />
    </Svg>
  );
}

export default ShieldWarning;
