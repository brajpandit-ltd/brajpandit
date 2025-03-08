import Image from "next/image";
import Button from "../common-ui/Button";

export default function Navbar() {
  return (
    <>
      <div className="mhdrs">
        <div className="mdhdrs">
          <div id="nav" className="py-4 px-6 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/assets/logo.png"
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
                  <Button text="LOGIN" id="lgtb" />
                </div>
                <div className="bthf2">
                  <Button text="RFGISTER" id="lgtb" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Navigation Menu --> */}
          <div className="nvbr1">
            <div className="nvbr2">
              <div className="nvbr">
                {["Home", "About", "Puja", "Blogs", "Shop", "Book Now"].map(
                  (item, index) => (
                    <Button key={index} text={item} className="nav-btn" />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
