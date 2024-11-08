import message from "/assets/icons/message.svg";

function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__wrapper">
        <div className="footer__info">
          <h3>2016 © SHOPGUIDE</h3>
          <div className="footer__rules-wrapper">
            <a href="#">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</a>
            <a href="#">ПРАВИЛА ПОЛЬЗОВАНИЯ</a>
          </div>
        </div>
        <button className="footer__feedback-button">
          <img src={message} alt="message" />
          <p>СВЯЗАТЬСЯ С НАМИ</p>
        </button>
      </div>
    </footer>
  );
}

export { Footer };
