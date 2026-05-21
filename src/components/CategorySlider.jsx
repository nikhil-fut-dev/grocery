import Slider from "react-slick";

export default function CategorySlider() {
  const categories = [
    { title: "Vegetables", img: "icon-food-1.png" },
    { title: "Fruits", img: "icon-food-2.png" },
    { title: "Breads", img: "icon-food-3.png" },
    { title: "Eggs", img: "icon-food-4.png" },
    { title: "Sea Foods", img: "icon-food-5.png" },
    { title: "Meat", img: "icon-food-6.png" },
    { title: "Juices", img: "icon-food-7.png" },
    { title: "Breads", img: "icon-food-3.png" },
    { title: "Eggs", img: "icon-food-4.png" },
    { title: "Sea Foods", img: "icon-food-5.png" },
    { title: "Meat", img: "icon-food-6.png" },
  ];

  const settings = {
    dots: false,
    Infinity: true,
    arrows: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, setting: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, setting: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="item-header-sec py-5">
      <div className="container">
        <div className="item-slider text-center">
          <Slider {...settings}>
            {categories.map((cat, index) => (
              <div key={index} className="items-header">
                <img src={`/images/${cat.img}`} alt={cat.title} />
                <h4>{cat.title}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
