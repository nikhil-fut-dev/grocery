export default function Features() {
  const perks = [
    { icon: "fa-box", text: "Everyday Fresh Products" },
    { icon: "fa-truck", text: "Free Delivery" },
    { icon: "fa-percent", text: "Best Price Market" },
    { icon: "fa-box", text: "Safety Delivered" },
  ];

  return (
    <section className="featured-sec py-5">
      <div className="container">
        <div className="row">
          {perks.map((perk, index) => (
            <div key={index} className="col-lg-3">
              <div className="featured-flex">
                <i className={`fa-solid ${perk.icon}`}></i>
                <p>{perk.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
