export default function Banner() {
  return (
    <section
      className="banner-sec"
      style={{ backgroundImage: "url(/images/header-bg.png)" }}
    >
      <div className="container">
        <div className="header-main-text">
          <h5>Exclusive offer 20/- off</h5>
          <h1>A Different Kind of Grocery Store</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            enim laboriosam eius natus, ut eligendi consequatur id voluptas illo
            voluptatum ad perferendis sed unde veniam!
          </p>
          <div className="nav-btn mt-4">
            <a href="#shop">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
