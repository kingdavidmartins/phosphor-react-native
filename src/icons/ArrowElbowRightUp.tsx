import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/ArrowElbowRightUp';
import duotone from '../duotone/ArrowElbowRightUp';
import fill from '../fill/ArrowElbowRightUp';
import light from '../light/ArrowElbowRightUp';
import regular from '../regular/ArrowElbowRightUp';
import thin from '../thin/ArrowElbowRightUp';

function ArrowElbowRightUp({ weight, color, size, style }: IconProps) {
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

export default ArrowElbowRightUp;
