/* GENERATED FILE */
import React, { useContext, useMemo } from 'react';
import { IconProps, IconContext } from '../lib';

import bold from '../bold/ArrowSquareDownRight';
import duotone from '../duotone/ArrowSquareDownRight';
import fill from '../fill/ArrowSquareDownRight';
import light from '../light/ArrowSquareDownRight';
import regular from '../regular/ArrowSquareDownRight';
import thin from '../thin/ArrowSquareDownRight';

function ArrowSquareDownRight({ weight, color, size, style }: IconProps) {
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

export default ArrowSquareDownRight;
