export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="top-content">
          <div className="top-flex">
            <li>
              <a href="#mail">
                <i className="fa-solid fa-envelope"></i>proonwork@gmail.com
              </a>
              <a href="#phone">
                <i className="fa-solid fa-phone"></i>91+ 9839507418
              </a>
            </li>
          </div>
          <div className="top-social">
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
    </div>
  );
}
