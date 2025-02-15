/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/SpeakerSimpleHigh';
import duotone from '../duotone/SpeakerSimpleHigh';
import fill from '../fill/SpeakerSimpleHigh';
import light from '../light/SpeakerSimpleHigh';
import regular from '../regular/SpeakerSimpleHigh';
import thin from '../thin/SpeakerSimpleHigh';

function SpeakerSimpleHigh({ weight, color, size, style }: IconProps) {
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    weight: contextWeight = 'regular',
    style: contextStyle,
  } = useContext(IconContext);

  const IconComponent = useMemo(() => {
    const iconWeight = weight ?? contextWeight;

    const weightMap = {
      bold,
      duotone,
      fill,
      light,
      regular,
      thin,
    };

    return weightMap[iconWeight];
  }, [weight, contextWeight]);

  return (
    <IconComponent
      color={color ?? contextColor}
      size={size ?? contextSize}
      style={{
        ...contextStyle,
        ...style,
      }}
    />
  );
}

export default SpeakerSimpleHigh;
