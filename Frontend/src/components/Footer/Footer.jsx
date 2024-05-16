import "./Footer.css";
import footer_logo from "../../Assets/logo_big.png";
import instagram_icon from "../../Assets/instagram_icon.png";
import pinterest_icon from "../../Assets/pinterest_icon.png";
import whatsapp_icon from "../../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="logo" />
        <p>SHOPPERS</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Works</li>
        <li>Offices</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Are Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;