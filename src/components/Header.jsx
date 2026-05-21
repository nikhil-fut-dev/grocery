export default function Header() {
  return (
    <header className="header-main">
      <div className="container">
        <div className="logo">
          <img src="/images/logo.png" alt="Grocery Store Logo" />
        </div>
        <div className="head-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
        <div className="header-icons">
          <ul>
            <li>
              <a href="#user">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>
            <li>
              <a href="#wishlist">
                <i className="fa-solid fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
