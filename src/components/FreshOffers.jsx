import ProductCard from "./ProductCard";

export default function FreshOffers() {
  return (
    <section className="product-item-sec">
      <div className="container">
        <h2 className="title text-center">Fresh offers</h2>
        <div className="row mt-5 align-items-center">
            <div className="col-lg-4">
                <div className="product-timer">
                    <img src="/images/back-img-2.png" alt="Deal Timer Background" />
                    <div className="product-time">
                        <div className="pr-time-text">
                            <h4 className="text-white">Deal of the Week</h4>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Chhaya, molestiae!
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
