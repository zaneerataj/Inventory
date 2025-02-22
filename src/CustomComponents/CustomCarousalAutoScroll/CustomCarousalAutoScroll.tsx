import {
  Carousel,
  CarouselMainContainer,
  SliderMainItem,
} from '../../../components/extension/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import React, { FC } from 'react';

const CustomCarouselAutoScroll: FC = () => {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          speed: 1,
        }),
      ]}
      carouselOptions={{
        loop: true,
      }}
    >
      <CarouselMainContainer className="h-60">
        {Array.from({ length: 5 }).map((_, index) => (
          <SliderMainItem key={index} className="bg-transparent">
            <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
              Slide {index + 1}
            </div>
          </SliderMainItem>
        ))}
      </CarouselMainContainer>
    </Carousel>
  );
};

export default CustomCarouselAutoScroll;
