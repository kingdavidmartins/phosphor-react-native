/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

import { IconProps } from '../lib';

function DiceFour(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Rect
        x={40}
        y={40}
        width={176}
        height={176}
        rx={24}
        strokeWidth={8}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Circle cx={100} cy={100} r={8} fill={props.color} />
      <Circle cx={156} cy={100} r={8} fill={props.color} />
      <Circle cx={100} cy={156} r={8} fill={props.color} />
      <Circle cx={156} cy={156} r={8} fill={props.color} />
    </Svg>
  );
}

export default DiceFour;
