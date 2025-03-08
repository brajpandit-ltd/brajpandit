import Slider from "../components/Slider";

const PoojaSlider = () => {
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
    <div className="mdpjsm">
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

          <Slider sliderData={pujas} />
        </div>
      </div>
    </div>
  );
};

export default PoojaSlider;
