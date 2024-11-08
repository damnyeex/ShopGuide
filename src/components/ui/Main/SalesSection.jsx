import iphone5 from "/assets/image/iphone5.png";
import nexus from "/assets/image/nexus.png";

function SalesSection() {
  return (
    <div className="sales__section">
      <div className="sales__shares-wrapper">
        <div className="sales__text-content">
          <h2>НАШИ АКЦИИ</h2>
          <p>
            Каждый день в Москве проходят распродажи. В акциях и скидках дня
            могут принимать участие любые группы товаров. Особенно популярны
            распродажи одежды и обуви, распродажи мебели, распродажи сумок.
          </p>
        </div>
        <div className="sales__images">
          <img className="sales__image-iphone" src={iphone5} alt="iphone5" />
          <img className="sales__image-nexus" src={nexus} alt="nexus" />
        </div>
      </div>
    </div>
  );
}

export { SalesSection };
