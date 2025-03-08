import Image from "next/image";
import "../styles.css";

const Footer = () => {
  return (
    <>
      <div className="mcf">
        <div className="mcf1">
          <div className="mcf2">
            <div className="about-section">
              <Image
                src="/assets/logo.png"
                alt="Panditjee Online"
                width={110}
                height={110}
              />
              <p>"Book Qualified Pandit Anytime Anywhere"</p>
              <p>
                Panditjee Online is the most trusted platform for availing Vedic
                and Hindu Puja Services like performing Vedic Rituals, Religious
                Ceremonies, Vastu Yagya, and many more.
              </p>
              <h3>Stay In Touch With Us:</h3>
              <div className="social-icons">
                {/* <a href="#"><img src="linkedin-icon.png" alt="LinkedIn"></a>
                    <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
                    <a href="#"><img src="telegram-icon.png" alt="Telegram"></a>
                    <a href="#"><img src="youtube-icon.png" alt="YouTube"></a> */}
              </div>
            </div>

            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Marriage Ceremony</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Videos</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Be a Pandit</a>
                </li>
              </ul>
            </div>

            <div className="puja-services">
              <h3>Puja Services</h3>
              <ul>
                <li>
                  <a href="#">Puran Katha</a>
                </li>
                <li>
                  <a href="#">Shanti Puja</a>
                </li>
                <li>
                  <a href="#">Havan / Yagna</a>
                </li>
                <li>
                  <a href="#">Sanskar Vidhi</a>
                </li>
                <li>
                  <a href="#">Sthapan Puja</a>
                </li>
                <li>
                  <a href="#">Festival Puja</a>
                </li>
                <li>
                  <a href="#">All Puja Services</a>
                </li>
              </ul>
            </div>

            <div className="contact-us">
              <h3>Contact Us</h3>
              <p>
                <strong>Address:</strong> Braj Pandit, Mathura, Uttar Pradesh,
                India
              </p>
              <p>
                <strong>Email Address:</strong>{" "}
                <a href="mailto:info@panditjeeonline.in">
                  info@panditjeeonline.in
                </a>
              </p>
              <p>
                <strong>Phone Number:</strong>{" "}
                <a href="tel:+919662001600">+91 96620 01600</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
