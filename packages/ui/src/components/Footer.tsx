import Image from "next/image";
import "../styles.css";
import Link from 'next/link'


const Footer = () => {
  return (
    <>
      <div className="mcf">
        <div className="mcf1">
          <div className="mcf2">
            <div className="about-section">
              <Image
                className="logo"
                src="/assets/Brajlog.png"
                alt="Panditjee Online"
                width={110}
                height={110}
                id="footer-logo"
              />
              <p id="book-heading">"Book Qualified Pandit Anytime Anywhere"</p>
              <p className="book-para">
                Panditjee Online is the most trusted platform for availing Vedic
                and Hindu Puja Services like performing Vedic Rituals, Religious
                Ceremonies, Vastu Yagya, and many more.
              </p>
              <p className="book-sta">Stay In Touch With Us:</p>
              <div className="social-icons">
                {/* <a href="#"><img src="linkedin-icon.png" alt="LinkedIn"></a>
                    <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
                    <a href="#"><img src="telegram-icon.png" alt="Telegram"></a>
                    <a href="#"><img src="youtube-icon.png" alt="YouTube"></a> */}
              </div>
            </div>

            <div className="quick-links">
              <h2 className="Q_C_P">Quick Links</h2>
              <ul>
                <li id="li">
                  <Link href="/">About Us </Link>
                </li>
                <li id="li">
                  <Link href="/"> Marriage Ceremony</Link>
                </li>
                <li id="li">
                <Link href="/"> Gallery</Link>
                </li>
                <li id="li">
                <Link href="/"> Videos</Link>
                </li>
                <li id="li">
                <Link href="/"> Blogs</Link>
                </li>
                <li id="li">
                <Link href="/"> Contact Us</Link>
                </li>
                <li id="li">
                <Link href="/"> Be a Pandit</Link>
                </li>
              </ul>
            </div>

            <div className="puja-services">
              <h2 className="Q_C_P">Puja Services</h2>
              <ul>
                <li id="li">
                  <a href="#">Puran Katha</a>
                </li>
                <li id="li">
                  <a href="#">Shanti Puja</a>
                </li>
                <li id="li">
                  <a href="#">Havan / Yagna</a>
                </li>
                <li id="li">
                  <a href="#">Sanskar Vidhi</a>
                </li>
                <li id="li">
                  <a href="#">Sthapan Puja</a>
                </li>
                <li id="li">
                  <a href="#">Festival Puja</a>
                </li>
                <li id="li">
                  <a href="#">All Puja Services</a>
                </li>
              </ul> 
            </div>

            <div className="contact-us">
              <h2 className="Q_C_P">Contact Us</h2>
              <p className="footer-contact">
                <strong>Address:</strong> Braj Pandit, Mathura, Uttar Pradesh,
                India
              </p>
              <p className="footer-contact">
                <strong>Email Address:</strong>{" "}
                <a href="mailto:info@panditjeeonline.in">
                  info@panditjeeonline.in
                </a>
              </p>
              <p className="footer-contact">
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
