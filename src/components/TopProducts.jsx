import Slider from "react-slick";
import ProductCard from "./ProductCard";

export default function TopProducts() {
  const products = [
    { title: "Cucumber", image: "product-img.png", price: "$22.00" },
    { title: "Potato", image: "product-img-1.png", price: "$22.00" },
    { title: "Spinach", image: "product-img-2.png", price: "$22.00" },
    { title: "Milk", image: "product-img-3.png", price: "$22.00" },
    { title: "Cabbage", image: "product-img-4.png", price: "$22.00" },
    { title: "Zucchini", image: "product-img.png", price: "$22.00" },
    { title: "Products", image: "product-img-1.png", price: "$22.00" },
    { title: "Products", image: "product-img-2.png", price: "$22.00" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
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
        <h2 className="title text-center">Top Sell Products</h2>
        <div className="product-slider mt-5">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="px-2">
                <ProductCard {...product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
