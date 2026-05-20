export default function WeekendDeals() {
  return (
    <section className="weekend-sec py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="weekend-main"
              style={{ background: "url(/images/weekend-3-back.jpg)" }}
            >
              <div className="weekend-text">
                <h5>Weekend discount 40%</h5>
                <h3>Surprise Mix Bhuja and peas</h3>
                <div className="nav-btn mt-4">
                  <a href="#shop">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="weekend-main"
              style={{ background: "url(/images/weekend-2-back.jpg)" }}
            >
              <div className="weekend-text">
                <h5>Weekend discount 40%</h5>
                <h3>Peanuts Ruffs</h3>
                <div className="nav-btn mt-4">
                  <a href="#shop">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
