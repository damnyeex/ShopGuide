import vk from "/assets/icons/vk.svg";
import twitter from "/assets/icons/twitter.svg";
import instagram from "/assets/icons/instagram.svg";
import facebook from "/assets/icons/facebook.svg";
import ok from "/assets/icons/ok.svg";
import prada from "/assets/image/prada.png";
import nike from "/assets/image/nike.png";
import tsum from "/assets/image/tsum.png";
import adidas from "/assets/image/adidas.png";
import gum from "/assets/image/gum.png";
import zara from "/assets/image/zara.png";
import pazolini from "/assets/image/pazolini.png";

export const headerIcons = [
  { id: 1, path: vk, alt: "vk" },
  { id: 2, path: twitter, alt: "twitter" },
  { id: 3, path: instagram, alt: "instagram" },
  { id: 4, path: facebook, alt: "facebook" },
  { id: 5, path: ok, alt: "ok" },
];

export const listIcons = headerIcons.map((icon) => (
  <li className="header__icon" key={icon.id}>
    <img src={icon.path} alt={icon.alt} />
  </li>
));

export const partnersImages = [
  { id: 1, path: prada, alt: "prada" },
  { id: 2, path: nike, alt: "nike" },
  { id: 3, path: tsum, alt: "tsum" },
  { id: 4, path: adidas, alt: "adidas" },
  { id: 5, path: gum, alt: "gum" },
  { id: 6, path: zara, alt: "zara" },
  { id: 7, path: pazolini, alt: "pazolini" },
];

export const listPartnersImages = partnersImages.map((image) => (
  <li className="partners__image" key={image.id}>
    <img src={image.path} alt={image.alt} />
  </li>
));
