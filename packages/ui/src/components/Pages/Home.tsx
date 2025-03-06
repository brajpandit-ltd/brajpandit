"use client"
import "./home.css";
import Image from "next/image";
// Swiper components, modules and styles
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import dynamic from "next/dynamic";
// import { Navigation } from "swiper";

const Home = () => {
  const pujas = [
    {
      title: "Akhand Ramayan Path",
      description:
        "Ramayan Path is the image of the God of God and that is why it is worshiped in reverence. By its recitation and.",
      image: "/assets/w2.jpg",
    },
    {
      title: "Satyanarayan Puja",
      description:
        "Ramayan Path is the image of the God of God and that is why it is worshiped in reverence. By its recitation and.",
      image: "/assets/w2.jpg",
    },
    {
      title: "Office Opening Puja",
      description:
        "Ramayan Path is the image of the God of God and that is why it is worshiped in reverence. By its recitation and.",
      image: "/assets/w2.jpg",
    },
  ];
  return (
    <>
      <div className="mhdrsH">
        <div className="mdhdrsH">
          <div className="mthdrsH">
            <h1 className="mthhH">Book Panditji Online All Kinds Of Pooja!!</h1>
            <p className="mtherH">
              Panditjee Online is the most trusted platform for availing Vedic
              and Hindu Puja Services like performing Vedic Rituals, Religious
              Ceremonies, Vastu Yagya and many more.
            </p>
            <button className="mthereH">Book Now</button>
          </div>
        </div>
      </div>
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
              <button className="mdtbotn">Book Now</button>
              <button className="mdtbotn1">Leran More</button>
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

      {/* <div className="mdpjsm">
        <div className="mdpjss">
          <div className="puja-carousel">
            <div className="puja-header">
              <h2>Popular Pujas</h2>
              <p>
                Bring divine blessings to your celebrations with special event
                pujas.
              </p>
              <button className="see-all">See All »»</button>
            </div>

            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              className="puja-swiper"
            >
              {pujas.map((puja, index) => (
                <SwiperSlide key={index}>
                  <div className="puja-card">
                    <Image src={puja.image} alt={puja.title} />
                    <h3>{puja.title}</h3>
                    <p>{puja.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div> */}

      {/* Form scetion  */}
      <div className="mdfom">
        <div className="mdfomd">
          <div className="mdfomh">
            <div className="info-fi">
              <h2 id="h">Fill Out The Form to Confirm your Pandit ji Booking</h2>
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
            <div className="form-con">
              <form>
               <div className="frm-cnn">
               <div className="fm-n">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>

                <div className="fm-M">
                  <label htmlFor="mobile">Mobile No.</label>
                  <input
                    type="text"
                    id="mobile"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div className="fm-D">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" />
                </div>

                <div className="fm-C">
                  <label htmlFor="service">Choose Service</label>
                  <input
                    type="text"
                    id="service"
                    placeholder="Enter service type"
                  />
                </div>

                <div className="fm-T">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div className="btnnn">
                <button type="submit">Submit</button>
                </div>
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
