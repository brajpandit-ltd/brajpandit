import Image from "next/image";
import "../styles.css";


export default function Navbar() {
  return (
    <>
      <div className="mhdrs">
        <div className="mdhdrs">
          <div id="nav" className="py-4 px-6 flex items-center justify-between">
            <div className="flex items-center">
            <Image
                 src= "/assets/logo.png"
                width={110}
                height={10}
                alt="Picture of the author"
              />
            </div>
            <div className="srch">
              <input type="text" placeholder="Search for pooja" />
            </div>
            <div className="bthf">
              <div className="bthf1">
                <div className="bthf2">
                  <button id="lgtb">LOGIN</button>
                </div>
                <div className="bthf2">
                  <button id="lgtb">RFGISTER</button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Navigation Menu --> */}
          <div className="nvbr1">
            <div className="nvbr2">
              <div className="nvbr">
                <button className="nav-btn">Home</button>
                <button className="nav-btn">About</button>
                <button className="nav-btn">Puja</button>
                <button className="nav-btn">Blogs</button>
                <button className="nav-btn">Shop</button>
                <button className="nav-btn">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
