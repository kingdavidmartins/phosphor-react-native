/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/Upload';
import duotone from '../duotone/Upload';
import fill from '../fill/Upload';
import light from '../light/Upload';
import regular from '../regular/Upload';
import thin from '../thin/Upload';

function Upload({ weight, color, size, style }: IconProps) {
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

export default Upload;
