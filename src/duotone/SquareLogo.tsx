/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

import { IconProps } from '../lib';

function SquareLogo(props: IconProps) {
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
      <Rect x={96} y={96.00002} width={64} height={64} opacity={0.2} />
      <Rect
        x={40}
        y={40.00002}
        width={176}
        height={176}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Rect
        x={96}
        y={96.00002}
        width={64}
        height={64}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export default SquareLogo;
