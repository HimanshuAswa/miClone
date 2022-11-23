
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, BrowserRouter as Router, Route, Switch, } from "react-router-dom"
import Smallnav from './component/Smallnav';
import Slider from './component/Slider.js'
import Offers from './component/Offers.js'
import Heading from './component/Heading.js'
import StarProduct from './component/StarProduct.js'
import HotAccessoriesMenu from './component/HotAccessoriesMenu.js'
import HotAccessories from './component/HotAccessories.js'
import ProductReviews from './component/ProductReviews.js'
import Videos from './component/Videos.js'
import Banner from './component/Banner.js'
import Footer from './component/Footer.js'
import Package from "./data/data.json";
const { data } = Package;

function App() {
  return (
    <Router>
      <Navbar />
      <Smallnav />
      <Slider start={Package.banner.start} />
      <Offers offer={Package.offer} />
      <Heading text="STAR PRODUCT" />
      <StarProduct starProduct={Package.starProduct} />
      <Heading text="HOT ACCESORIES" />
      <HotAccessoriesMenu />

      <Switch>
        <Route exact path="/music">
          <HotAccessories music={Package.hotAccessories.music} musicCover={Package.hotAccessoriesCover.music} />
        </Route>
        <Route exact path="/smartDevice">
          <HotAccessories smartDevice={Package.hotAccessories.smartDevice} smartDeviceCover={Package.hotAccessoriesCover.smartDevice} />
        </Route>
        <Route exact path="/home">
          <HotAccessories home={Package.hotAccessories.home} homeCover={Package.hotAccessoriesCover.home} />
        </Route>
        <Route exact path="/lifestyle">
          <HotAccessories lifeStyle={Package.hotAccessories.lifeStyle} lifeStyleCover={Package.hotAccessoriesCover.lifeStyle} />
        </Route>
        <Route exact path="/mobileAccessories">
          <HotAccessories mobileAccessories={Package.hotAccessories.mobileAccessories} mobileAccessoriesCover={Package.hotAccessoriesCover.mobileAccessories} />
        </Route>
      </Switch>
      <Heading text="PRODUCT REVIEWS" />

      <ProductReviews productReviews={Package.productReviews}/>
      <Heading text="VIDEOS" />
      <Videos videos={Package.videos}/>
      <Heading text="IN THE PRESS" />
      <Banner banner={Package.banner}/>
      <Footer footer={Package.footer} />

    </Router>
  );
}

export default App;
