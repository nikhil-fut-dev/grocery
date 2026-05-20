export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="top-content">
          <div className="top-flex">
            <li>
              <a href="mailto:infocodingwing@gmail.com">
                <i className="fa-solid fa-envelope"></i>infocodingwing@gmail.com
              </a>
              <a href="tel:1234567890">
                <i className="fa-solid fa-phone"></i>12345 67890
              </a>
            </li>
          </div>
          <div className="top-social">
            <ul>
              <li>
                <a href="#facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#linkedin">
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
