import { useSwipeable } from "react-swipeable";
import PropTypes from "prop-types";
import swipe_arrow1 from "/assets/image/swipe_arrow1.png";
import swipe_arrow2 from "/assets/image/swipe_arrow2.png";
import { usePartnersSlider } from "../../../hooks/useScroll";
import { useTittleContext } from "../../../hooks/useTittleContext";

function PartnersSection({ listPartnersImages }) {
  const { activeTittle, switchTittle } = useTittleContext();
  const {
    handleScroll,
    handleDragStart,
    handleDragEnd,
    handleDragMove,
    scrollLeft,
    scrollRight,
    sliderRef,
  } = usePartnersSlider(listPartnersImages);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeTittle < 3) {
        switchTittle(activeTittle + 1);
      }
    },
    onSwipedRight: () => {
      if (activeTittle > 0) {
        switchTittle(activeTittle - 1);
      }
    },
    trackTouch: true,
  });

  return (
    <div
      className="partners__section"
      {...handlers}
      onMouseMove={handleDragMove}
      onTouchMove={handleDragMove}
    >
      <h2>НАШИ ПАРТНЁРЫ</h2>
      <div className="partners__list-wrapper">
        <img
          src={swipe_arrow1}
          alt="Swipe Left"
          className="partners__list-arrow partners__arrow-left"
          onClick={scrollLeft}
        />
        <ul
          ref={sliderRef}
          className="partners__list-wrapper-image"
          onScroll={handleScroll}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onMouseMove={handleDragMove}
          onTouchMove={handleDragMove}
        >
          {listPartnersImages}
        </ul>
        <img
          src={swipe_arrow2}
          alt="Swipe Right"
          className="partners__list-arrow partners__arrow-right"
          onClick={scrollRight}
        />
      </div>
      <div className="partners__feedback-wrapper">
        <div className="partners__feedback-info">
          <p>Хотите стать партнёром?</p>
          <p>Напишите нам и про ваши акции узнают все.</p>
        </div>
        <button className="partners__feedback-button">
          <p>СТАТЬ ПАРТНЕРОМ</p>
        </button>
      </div>
    </div>
  );
}

export { PartnersSection };

PartnersSection.propTypes = {
  listPartnersImages: PropTypes.arrayOf(PropTypes.node).isRequired,
};
