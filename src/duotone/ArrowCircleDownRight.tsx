import * as React from 'react';
import Svg, { Rect, Circle, Polyline, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function ArrowCircleDownRight(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle cx={128} cy={128} r={96} opacity={0.2} />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={16}
      />
      <Polyline
        points="108 156 156 156 156 108"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Line
        x1={100}
        y1={100}
        x2={156}
        y2={156}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default ArrowCircleDownRight;
