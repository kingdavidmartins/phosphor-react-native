/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Line } from 'react-native-svg';

import { IconProps } from '../lib';

function DeviceTabletSpeaker(props: IconProps) {
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
        x={32}
        y={48}
        width={192}
        height={160}
        rx={16}
        transform="translate(256) rotate(90)"
        strokeWidth={16}
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
        strokeWidth={16}
      />
    </Svg>
  );
}

export default DeviceTabletSpeaker;
