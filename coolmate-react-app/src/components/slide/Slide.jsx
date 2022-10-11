import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./slide.scss";
const items = [
  {
    src: "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100,format=auto/uploads/July2022/Excool-Banner-website.jpeg",
    altText: "Slide 1",
    key: 1,
  },
  {
    src: "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100,format=auto/uploads/October2022/Hero-BST-Dong-ppp_21.jpeg",
    altText: "Slide 2",
    key: 2,
  },
  {
    src: "https://media.coolmate.me/cdn-cgi/image/width=1920,quality=100,format=auto/uploads/July2022/Banner-Coolmate-Active-opt-1.jpeg",
    altText: "Slide 3",
    key: 3,
  },
];

function Slide(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Slide;
