import Slider from "../components/Panditslider";

const PanditSlider = () => {
  const pujas = [
    {
      name: "Mithilesh pathak",
      Age:23,
      image: "/assets/pandit1.jpeg",
      experience: "5 years",
    },
    {
      name: "Gopal Sharma",
      age:35,
      image: "/assets/pandit1.jpeg",
      experience: "5 years",
    },
    {
      name: "Gopal Sharma",
      age:53,
      image: "/assets/pandit1.jpeg",
      experience: "5 years",
    },
    {
      name: "Gopal Sharma",
      age:53,
      image: "/assets/pandit1.jpeg",
      experience: "5 years",
    },
    {
      name: "Gopal Sharma",
      age:53,
      image: "/assets/pandit1.jpeg",
      experience: "5 years",
    },
    {
      name: "Gopal Sharma",
      age:53,
      image: "/assets/pandit1.jpeg",
      experience: "5 years",
    },
  ];

  return (
    <div className="mdpjsm">
      <div className="mdpjss">
        <div className="puja-carousel">
          <div className="puja-header">
            <div className="poojsh">
            <h2 className="poojaPp">Recommended Pandit ji</h2>
            </div>
            <button className="see-all">See All »»</button>
          </div>

          <Slider sliderData={pujas} />
        </div>
      </div>
    </div>
  );
};

export default PanditSlider;
