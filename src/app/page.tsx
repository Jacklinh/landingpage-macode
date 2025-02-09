
import Header from "./components/Header";
import Mainvs from "./components/Mainvs";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Building from "./components/Building";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="wrapper">
       <div className="wrapHeader">
       <Header />
        <Mainvs />
       </div>
       <main>
          <Banner />
          <Feature />
          <Building />
          <Pricing />
          <Faq />
       </main>
       <Footer />
    </div>
  );
}
