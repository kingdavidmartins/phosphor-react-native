/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Circle, Path, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function IdentificationBadge(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Rect width={256} height={256} fill="none" />
      <Circle
        cx={128}
        cy={136}
        r={32}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Path
        d="M79.998,191.99792a60.00877,60.00877,0,0,1,96.004-.00225"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Rect
        x={32}
        y={48}
        width={192}
        height={160}
        rx={8}
        transform="translate(256) rotate(90)"
        strokeWidth={8}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Line
        x1={96}
        y1={64}
        x2={160}
        y2={64}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default IdentificationBadge;
