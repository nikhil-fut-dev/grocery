export default function ProductCard({ image, title, price }) {
  return (
    <div className="product-box">
      <div className="pr-icons">
        <ul>
          <li>
            <a href="#profile">
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
          <li>
            <a href="#wishlist">
              <i className="fa-solid fa-heart"></i>
            </a>
          </li>
          <li>
            <a href="#view">
              <i className="fa-solid fa-eye"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="pr-img">
        <img src={`/images/${image}`} alt={title} />
      </div>

      <div className="pr-text">
        <h6>In Stock</h6>
        <h5>{title}</h5>
        <span className="price">{price}</span>
        <div className="cart-btn">
          <a href="#cart">
            Add to cart <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
