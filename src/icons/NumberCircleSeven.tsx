/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/NumberCircleSeven';
import duotone from '../duotone/NumberCircleSeven';
import fill from '../fill/NumberCircleSeven';
import light from '../light/NumberCircleSeven';
import regular from '../regular/NumberCircleSeven';
import thin from '../thin/NumberCircleSeven';

function NumberCircleSeven({ weight, color, size, style }: IconProps) {
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

export default NumberCircleSeven;
