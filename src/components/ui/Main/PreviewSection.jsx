import theBest from "/assets/image/theBest.png";
import geolocation from "/assets/image/geolocation.png";
import notifications from "/assets/image/notifications.png";
import catalog from "/assets/image/catalog.png";

function PreviewSection() {
  return (
    <div className="preview__section">
      <ul className="preview__card-list">
        <li className="preview__card-item theBest-wrapper">
          <img src={theBest} alt="theBest" />
          <h3>ТОЛЬКО ЛУЧШИЕ</h3>
          <p>Всегда актуальные акции у вас в телефоне</p>
        </li>
        <li className="preview__card-item geolocation-wrapper">
          <img src={geolocation} alt="geolocation" />
          <h3>ВСЕГДА РЯДОМ</h3>
          <p>Находите ближайшие акции на карте рядом с вами</p>
        </li>
        <li className="preview__card-item notifications-wrapper">
          <img src={notifications} alt="notifications" />
          <h3>УВЕДОМЛЕНИЯ</h3>
          <p>
            Подписывайтесь только на то, что вас интересует и всегда будьте в
            курсе новых акций.
          </p>
        </li>
        <li className="preview__card-item catalog-wrapper">
          <img src={catalog} alt="catalog" />
          <h3>КАТАЛОГ</h3>
          <p>
            Огромный каталог с информацией о магазинах, брендах и ТЦ всегда под
            рукой.
          </p>
        </li>
      </ul>
    </div>
  );
}

export { PreviewSection };
