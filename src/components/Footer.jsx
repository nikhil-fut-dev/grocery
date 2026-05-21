export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-img">
              <img src="/images/footer.png" alt="Footer Logo" />
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                    <i className="fa-solid fa-angle-right">Home</i>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <i className="fa-solid fa-angle-right">About</i>
                  </a>
                </li>
                <li>
                  <a href="#service">
                    <i className="fa-solid fa-angle-right">Service</i>
                  </a>
                </li>
                <li>
                  <a href="#shop">
                    <i className="fa-solid fa-angle-right">Shop</i>
                  </a>
                </li>
                <li>
                  <a href="#products">
                    <i className="fa-solid fa-angle-right">Products</i>
                  </a>
                </li>
                <li>
                  <a href="#categories">
                    <i className="fa-solid fa-angle-right">Categories</i>
                  </a>
                </li>
                <li>
                  <a href="#offers">
                    <i className="fa-solid fa-angle-right">Offers</i>
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
                    <i className="fa-solid fa-angle-right">Shipments</i>
                  </a>
                </li>
                <li>
                  <a href="#privacy">
                    <i className="fa-solid fa-angle-right">Privacy</i>
                  </a>
                </li>
                <li>
                  <a href="#order">
                    <i className="fa-solid fa-angle-right">Order</i>
                  </a>
                </li>
                <li>
                  <a href="#return">
                    <i className="fa-solid fa-angle-right">Return</i>
                  </a>
                </li>
                <li>
                  <a href="#policies">
                    <i className="fa-solid fa-angle-right">Policies</i>
                  </a>
                </li>
                <li>
                  <a href="#orders">
                    <i className="fa-solid fa-angle-right">Orders</i>
                  </a>
                </li>
                <li>
                  <a href="#offers">
                    <i className="fa-solid fa-angle-right">Offers</i>
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
                    <a href="mailto:proonwork@gmail.com">proonwork@gmail.com</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:1234567890">9839507418</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <a href="#location">Varanasi,Durgakund, Khojawa</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyrights">
        <p className="m-0">Copyrights | Nikhil Web-Dev | 2026</p>
      </div>
    </footer>
  );
}
