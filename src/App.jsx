import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CategorySlider from "./components/CategorySlider";
import TopProducts from "./components/TopProducts";
import FreshOffers from "./components/FreshOffers";
import WeekendDeals from "./components/WeekendDeals";
import TodayArrivals from "./components/TodayArrivals";
import Features from "./components/Features";
import PromoBanner from "./components/PromoBanner";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

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
      <Features />
      <PromoBanner />
      <BlogSection />
      <Footer />
    </main>
  );
}

export default App;
