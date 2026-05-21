import Slider from "react-slick";
import ProductCard from "./ProductCard";

export default function TodayArrivals() {
  const arrivals = [
    { title: "Banana", image: "product-img-6.png", price: "$22.00" },
    { title: "Potato", image: "product-img-1.png", price: "$22.00" },
    { title: "Spinach", image: "product-img-2.png", price: "$22.00" },
    { title: "Milk", image: "product-img-3.png", price: "$22.00" },
    { title: "Lime", image: "iten-1.jpg", price: "$22.00" },
    { title: "Onion", image: "iten-2.jpg", price: "$22.00" },
    { title: "Broccoli", image: "iten-3.jpg", price: "$22.00" },
    { title: "Capsicum", image: "iten-4.jpg", price: "$22.00" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="product-sec pb-5">
      <div className="container">
        <h2 className="title text-center">Today Arrivals Fresh</h2>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="product-timer">
              <img src="/images/item-time-2.jpg" alt="Arrival Deals Panel" />
              <div className="product-time">
                <div className="pr-time-text">
                  <h4 className="text-white">Deals of the Week</h4>
                </div>
                <div className="timer-flex">
                  <ul>
                    <li>
                      25 <span>DAYS</span>
                    </li>
                    <li>
                      16 <span>HRS</span>
                    </li>
                    <li>
                      20 <span>MIN</span>
                    </li>
                    <li>
                      12 <span>SEC</span>
                    </li>
                  </ul>
                </div>
                <p className="text-white mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nikhil, molestiae!
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="product-slider-2 mt-5">
              <Slider {...settings}>
                {arrivals.map((product, index) => (
                  <div key={index} className="px-2">
                    <ProductCard {...ProductCard} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
