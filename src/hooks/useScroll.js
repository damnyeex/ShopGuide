import { useState, useEffect, useRef } from "react";

export const usePartnersSlider = (listPartnersImages) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const sliderRef = useRef(null);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  useEffect(() => {
    const updateSliderWidth = () => {
      const slider = sliderRef.current;
      if (slider) {
        setSliderWidth(slider.scrollWidth);
      }
    };

    window.addEventListener("resize", updateSliderWidth);
    updateSliderWidth();
    return () => {
      window.removeEventListener("resize", updateSliderWidth);
    };
  }, [listPartnersImages]);

  useEffect(() => {
    const totalWidth = sliderWidth;
    const containerWidth = window.innerWidth;
    setShowArrows(totalWidth > containerWidth);
  }, [sliderWidth]);

  const handleScroll = (e) => {
    if (!isScrolling) {
      e.preventDefault();
    }
  };

  const handleDragStart = (e) => {
    setIsScrolling(true);
    startX.current = e.pageX || e.touches[0].pageX;
    scrollLeftPos.current = sliderRef.current.scrollLeft;
  };

  const handleDragEnd = () => {
    setIsScrolling(false);
  };

  const handleDragMove = (e) => {
    if (!isScrolling) return;

    const moveX = (e.pageX || e.touches[0].pageX) - startX.current;
    sliderRef.current.scrollLeft = scrollLeftPos.current - moveX;
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 2;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 2;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return {
    showArrows,
    isScrolling,
    handleScroll,
    handleDragStart,
    handleDragEnd,
    handleDragMove,
    scrollLeft,
    scrollRight,
    sliderRef,
  };
};
