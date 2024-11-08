import { useSwipeable } from "react-swipeable";
import iphone_2 from "/assets/image/iphone_2.png";
import share from "/assets/image/share.png";
import useAnimation from "../../../hooks/useAnimations";

function FavouritesSection() {
  const { selected, textOpacity, hoverOffset, handleHover, handleSwipe } =
    useAnimation();

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  return (
    <div className="favourites__section">
      <div className="favourites__card-wrapper">
        <h2
          onClick={() => handleHover("profile")}
          style={{
            transition: "transform 0.3s ease",
            transform: `translateY(-${hoverOffset}px)`,
          }}
        >
          ИЗБРАННОЕ
        </h2>
        <div className="favourites__card-phone-wrapper">
          <img
            className="favourites__card-phone"
            src={iphone_2}
            alt="iphone_2"
          />
          <div className="favourites__card-phone-image">
            <img src={share} alt="share" />
          </div>
        </div>
        <ul className="favourites__card-list" {...swipeHandlers}>
          <li
            className={`favourites__card-item ${
              selected === "profile" ? "highlighted" : ""
            }`}
            onMouseEnter={() => handleHover("profile")}
            onMouseLeave={() => handleHover(null)}
          >
            <h2>ПРОФИЛЬ АКЦИИ</h2>
          </li>
          <li
            className={`favourites__card-item ${
              selected === "subscriptions" ? "highlighted" : ""
            }`}
            onMouseEnter={() => handleHover("subscriptions")}
            onMouseLeave={() => handleHover(null)}
          >
            <h2>ПОДПИСКИ</h2>
          </li>
          <li
            className={`favourites__card-item ${
              selected === "map" ? "highlighted" : ""
            }`}
            onMouseEnter={() => handleHover("map")}
            onMouseLeave={() => handleHover(null)}
          >
            <h2>КАРТА</h2>
          </li>
          <li
            className={`favourites__card-item ${
              selected === "feed" ? "highlighted" : ""
            }`}
            onMouseEnter={() => handleHover("feed")}
            onMouseLeave={() => handleHover(null)}
          >
            <h2>МОЯ ЛЕНТА</h2>
          </li>
          <p style={{ opacity: textOpacity }}>
            <span>
              Вы всегда получите полную информацию об акции: подробное описание,
              бренд, магазины и торговые центры где походит акция.
            </span>
            <span>
              Также доступна возможность сразу перейти на сайт товара и купить в
              рамках действующей акции.
            </span>
          </p>
        </ul>
      </div>
    </div>
  );
}

export { FavouritesSection };
