export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-img">
              <img src="/images/footer.png" alt="Footer Logo" />
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati deserunt nobis tempora magnam minus quae.
              </p>
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="#fb">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#ig">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#tw">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#in">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footer-links ps-5">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#home">
                    <i className="fa-solid fa-angle-right"></i>Home
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <i className="fa-solid fa-angle-right"></i>About
                  </a>
                </li>
                <li>
                  <a href="#service">
                    <i className="fa-solid fa-angle-right"></i>Service
                  </a>
                </li>
                <li>
                  <a href="#shop">
                    <i className="fa-solid fa-angle-right"></i>Shop
                  </a>
                </li>
                <li>
                  <a href="#products">
                    <i className="fa-solid fa-angle-right"></i>Products
                  </a>
                </li>
                <li>
                  <a href="#categories">
                    <i className="fa-solid fa-angle-right"></i>Categories
                  </a>
                </li>
                <li>
                  <a href="#offers">
                    <i className="fa-solid fa-angle-right"></i>Offers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footer-links">
              <h4>Customers</h4>
              <ul>
                <li>
                  <a href="#shipments">
                    <i className="fa-solid fa-angle-right"></i>Shipments
                  </a>
                </li>
                <li>
                  <a href="#privacy">
                    <i className="fa-solid fa-angle-right"></i>Privacy
                  </a>
                </li>
                <li>
                  <a href="#order">
                    <i className="fa-solid fa-angle-right"></i>Order
                  </a>
                </li>
                <li>
                  <a href="#return">
                    <i className="fa-solid fa-angle-right"></i>Return
                  </a>
                </li>
                <li>
                  <a href="#policies">
                    <i className="fa-solid fa-angle-right"></i>Policies
                  </a>
                </li>
                <li>
                  <a href="#orders">
                    <i className="fa-solid fa-angle-right"></i>Orders
                  </a>
                </li>
                <li>
                  <a href="#offers">
                    <i className="fa-solid fa-angle-right"></i>Offers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footer-cont">
              <h4>Contact Us</h4>
              <div className="footer-flex">
                <ul>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:codingwing@gmail.com">
                      codingwing@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:1234567890">123456 7890</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <a href="#location">123 Lorem, ipsum.</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyrights">
        <p className="m-0">Copyrights | Coding Wing | 2026 .</p>
      </div>
    </footer>
  );
}
