/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

import { IconProps } from '../lib';

function LockSimple(props: IconProps) {
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
      <Rect x={39.99414} y={88} width={176} height={128} rx={8} opacity={0.2} />
      <Rect
        x={39.99414}
        y={88}
        width={176}
        height={128}
        rx={8}
        strokeWidth={16}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M91.99414,88V52a36,36,0,1,1,72,0V88"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </Svg>
  );
}

export default LockSimple;
