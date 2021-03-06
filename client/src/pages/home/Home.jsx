import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/property-list/PropertyList";
import LovedItems from "../../components/loved-items/LovedItems";
import MailList from "../../components/mail-list/MailList";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className="home-title">Browser by property type</h1>
        <PropertyList />
        <h1 className="home-title">Homes, Guests Love</h1>
        <LovedItems />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
