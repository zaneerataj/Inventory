import React, { FC } from 'react';
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from '../../../components/extension/carousel';

const CustomCarouselTwo: FC = () => {
  return (
    <Carousel orientation="vertical" className="flex items-center gap-2">
      <div className="relative basis-3/4 ">
        <CarouselMainContainer className="h-60">
          {Array.from({ length: 10 }).map((_, index) => (
            <SliderMainItem
              key={index}
              className="border border-muted flex items-center justify-center h-52 rounded-md"
            >
              Slide {index + 1}
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
      </div>
      <CarouselThumbsContainer className="h-60 basis-1/4">
        {Array.from({ length: 10 }).map((_, index) => (
          <SliderThumbItem
            key={index}
            index={index}
            className="rounded-md bg-transparent"
          >
            <span className="border border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background">
              Slide {index + 1}
            </span>
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export default CustomCarouselTwo;
