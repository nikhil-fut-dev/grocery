export default function Navbar() {
  const links = [
    "Home",
    "Shop",
    "Products",
    "Arrivals",
    "Blogs",
    "Offers",
    "About Us",
    "Contact Us",
  ];

  return (
    <nav className="navbar">
      <div className="container text-center">
        <ul>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(" ", "")}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
