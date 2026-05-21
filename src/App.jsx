import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CategorySlider from "./components/CategorySlider";
import TopProducts from "./components/TopProducts";
import FreshOffers from "./components/FreshOffers";
import WeekendDeals from "./components/WeekendDeals";
import TodayArrivals from "./components/TodayArrivals";

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
      <WeekendDeals />
      <TodayArrivals />
    </main>
  );
}

export default App;
