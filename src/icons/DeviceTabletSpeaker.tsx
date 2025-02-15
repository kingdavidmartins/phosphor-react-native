/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/DeviceTabletSpeaker';
import duotone from '../duotone/DeviceTabletSpeaker';
import fill from '../fill/DeviceTabletSpeaker';
import light from '../light/DeviceTabletSpeaker';
import regular from '../regular/DeviceTabletSpeaker';
import thin from '../thin/DeviceTabletSpeaker';

function DeviceTabletSpeaker({ weight, color, size, style }: IconProps) {
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

export default DeviceTabletSpeaker;
