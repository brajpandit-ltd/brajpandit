import Image from "next/image";
import { Button, ContactSection, PoojaSlider, Panditslider } from "@repo/ui";

export default function Page() {
  return (
    <main>
      {/* <!-- ---------Hero section as carousel------------ --> */}
      <div className="mhdrsH">
        <div className="mdhdrsH">
          <div className="mthdrsH">
            <h1 className="mthhH">Book Panditji Online All Kinds Of Pooja!!</h1>
            <p className="mtherH">
              Panditjee Online is the most trusted platform for availing Vedic
              and Hindu Puja Services like performing Vedic Rituals, Religious
              Ceremonies, Vastu Yagya and many more.
            </p>

            <Button text="Book Now" className="mthereH" />
          </div>
        </div>
      </div>

      {/* -----------------Book Panditji For Puja-------------------------- */}
      <div className="mddresh">
        <div className="mdlresd">
          <div className="txt-ctnt">
            <div className="dtxt">
              <h1>
                <span>Pandit Booking</span> - Book Panditji For Puja
              </h1>
            </div>
            <div className="dtcst">
              <p>
                Panditji Online is the most trusted platform for availing Vedic
                and Hindu Puja Services like performing Vedic Rituals, Religious
                Ceremonies, Vastu Yagya, and many more. We provide the best
                experienced and well-known purohits and pandits at your place to
                do puja. We are the leading Pandit Booking website. Now, you can
                perform your pooja with our Professional Purohits & Pandits.
              </p>
            </div>
            <div className="mdtxtsd">
              <p>
                Our pandits perform rituals like Havan, Yagya, Shanti Vidhi,
                Shubh Vivah – Wedding Ceremony, Satyanarayan Katha, Griha
                Pravesh, Namkaran Sanskar, Nava Graha Shanti, Engagement,
                Festival Puja, Janeu, Ganesh Puja, Ram Katha, Mundan Sanskar,
                Shrimant Puja, Namkaran, Bhagwat Katha, Vastu Shanti, etc.
              </p>
            </div>
            <div className="mdthd">
              <p>
                We provide highly qualified and experienced Panditji for all
                communities like Gujarati, Rajasthani, Marathi, Sindhi, Bihari,
                Bengali, and Panjabi.
              </p>
            </div>
            <div className="mdtbtn">
              <Button text="Book Now" className="mdtbotn" />
              <Button text="Learn More" className="mdtbotn" />
            </div>
          </div>
          <div className="img-ctnt">
            <Image
              src={"/assets/w3.png"}
              width={500}
              height={500}
              alt="comming"
            />
          </div>
        </div>
      </div>

      {/* -----------------PoojaSlider-------------------------- */}
      <PoojaSlider />

       {/* -----------------PoojaSlider-------------------------- */}
       <Panditslider />

      {/* ------------------- Form scetion ---------------------- */}
      <div className="mdfom">
        <div className="mdfomd">
          <div className="mdfomh">
            <div className="info-fi">
              <h2 id="h">
                Fill Out The Form to Confirm your Pandit ji Booking
              </h2>
              <div className="steps">
                <div className="step-m">
                  <div className="step">
                    <div className="circle">1</div>
                    <div className="st-des">
                      <h3 id="rx">Fill Out The Form</h3>
                      <p id="rf">
                        Fill the Necessary Details in the form and submit It.
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="circle">2</div>
                    <div className="st-des">
                      <h3 id="rx">Review of Your Form</h3>
                      <p id="rf">
                        Fill the Necessary Details in the form and submit It.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="step-m">
                  <div className="step">
                    <div className="circle">3</div>
                    <div className="st-des">
                      <h3 id="rx">Confirmation</h3>
                      <p id="rf">
                        Fill the Necessary Details in the form and submit It.
                      </p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="circle">4</div>
                    <div className="st-des">
                      <h3 id="rx">Relax</h3>
                      <p id="rf">
                        Fill the Necessary Details in the form and submit It.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-con w-full">
              <ContactSection />
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------Who are you-------------------------- */}
      <div className="mdfom">
        <div className="mdfomd">
          <div className="mdfomh">
            <div className="info-who">
              <h2 id="who">Who Are You?</h2>
              <div className="panditImg">
                <Image
                className="panditImg"
                  src={"/assets/worship.gif"}
                  width={500}
                  height={500}
                  alt="comming"
                />
              </div>
            </div>
            <div className="about-pandit">
              <h2 id="hp">Book a Pandit Now & Experience True Spirituality!</h2>
              <div className="head-pandit">
                Welcome to Braj Pandit, your trusted platform for booking
                experienced and knowledgeable Pandits for all types of Hindu
                rituals and ceremonies. Rooted in the divine land of
                Mathura-Vrindavan, we are committed to preserving and promoting
                the rich traditions of Sanatan Dharma. With a team of highly
                qualified Vedic scholars, we provide authentic and personalized
                services for pujas, havans, weddings, and other spiritual
                events. Whether you need an online consultation or an in-person
                ceremony, we ensure that every ritual is performed with utmost
                devotion and accuracy. At Braj Pandit, our mission is to make
                Vedic services easily accessible while upholding the sacred
                traditions of our ancestors. Let us help you connect with
                spirituality and bring divine blessings into your
              </div>
              <div>
                <Button text="Book Now" className="mdtbotn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
