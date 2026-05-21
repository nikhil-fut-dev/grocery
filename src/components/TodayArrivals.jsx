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
    
  );
}
