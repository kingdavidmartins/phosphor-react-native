/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function NumberSquareSeven(props: IconProps) {
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
      <Rect x={40} y={40} width={176} height={176} rx={8} opacity={0.2} />
      <Polyline
        points="104 84 152 84 120 180"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Rect
        x={40}
        y={40}
        width={176}
        height={176}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export default NumberSquareSeven;
