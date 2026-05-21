import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CategorySlider from "./components/CategorySlider";
import TopProducts from "./components/TopProducts";
import FreshOffers from "./components/FreshOffers";

function App() {
  return (
    <main>
      <TopHeader />
      <Header />
      <Navbar />
      <Banner />
      <CategorySlider />
      <TopProducts />
      <FreshOffers />
    </main>
  );
}

export default App;
