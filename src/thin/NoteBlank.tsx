/* GENERATED FILE */
import * as React from 'react';
import Svg, { Rect, Path, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function NoteBlank(props: IconProps) {
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
        d="M156.68629,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.68629a8,8,0,0,1-2.34315,5.65686l-51.3137,51.3137A8,8,0,0,1,156.68629,216Z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
      <Polyline
        points="215.279 159.992 160 159.992 160 215.272"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={8}
      />
    </Svg>
  );
}

export default NoteBlank;
