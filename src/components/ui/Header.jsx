import PropTypes from "prop-types";
import iphone_1 from "/assets/image/iphone_1.png";
import phone_image from "/assets/image/phone_image.png";
import arrow from "/assets/icons/arrow.svg";
import line from "/assets/image/line.png";
import appStore from "/assets/image/appStore.png";
import googlePlay from "/assets/image/googlePlay.png";

function Header({ listIcons }) {
  return (
    <header className="header container">
      <div className="header__wrapper">
        <ul className="header-icon__wrapper">{listIcons}</ul>
        <button className="header__button">
          <p>СТАТЬ ПАРТНЕРОМ</p>
        </button>
      </div>
      <div className="header__advertising-wrapper">
        <div className="header__adversiting-shop-guide">
          <div className="header__advertising-shares-wrapper">
            <div className="header__adversiting-shares">
              <p>ТОЛЬКО ЛУЧШИЕ АКЦИИ</p>
            </div>
          </div>
          <div className="header__adversiting-app-wrapper">
            <h1>
              SHOP<span>GUIDE</span>
            </h1>
            <div className="header__adversiting-app">
              <img
                className="header__adversiting-app-line"
                src={line}
                alt={line}
              ></img>
              <p>загрузить</p>
              <img
                className="header__adversiting-app-line"
                src={line}
                alt={line}
              ></img>
            </div>
            <div className="header__adversiting-app-download">
              <img src={appStore} alt={appStore}></img>
              <img src={googlePlay} alt={googlePlay}></img>
            </div>
          </div>
        </div>
        <div className="header__phone-wrapper">
          <img src={iphone_1} alt={iphone_1} />
          <div className="header__image-phone">
            <img src={phone_image} alt={phone_image} />
          </div>
        </div>
        <button className="header__swiper-button">
          <p>ВНИЗ</p>
          <img className="header__swiper-arrow" src={arrow} alt={arrow}></img>
          <p>ВНИЗ</p>
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  listIcons: PropTypes.array.isRequired,
};

export { Header };
