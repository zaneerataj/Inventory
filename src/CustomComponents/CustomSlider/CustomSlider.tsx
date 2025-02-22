import React, { FC } from 'react';
import { cn } from '../../../@/lib/utils';
import { Slider } from '../../../components/ui/slider';

type SliderProps = React.ComponentProps<typeof Slider>;

const CustomSlider: React.FC<SliderProps> = ({ className, ...props }) => {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn('w-[60%]', className)}
      {...props}
    />
  );
};

export default CustomSlider;
