import BLockFeatureFour from "../home-five/BLockFeatureFour";
import BLockFeatureOne from '../home-four/BLockFeatureOne'
import Category from "./Category"
import HeroBanner from "./HeroBanner"
import PropertyOne from "../home-three/PropertyOne"

import BLockFeatureThree from "./BLockFeatureThree"
import HomeSixBLockFeatureOne from "./BLockFeatureOne"
import PropertyTwo from "../home-three/PropertyTwo"
import Feedback from "./Feedback"
import Brand from "./Brand"
import Blog from "../home-four/Blog"
import FancyBanner from "./FancyBanner"
import FancyBannerThree from "../home-one/FancyBannerThree"
import FooterFive from "@/layouts/footers/FooterFive"
import HeaderOne from "@/layouts/headers/HeaderOne"
import AddressBanner from '../home-four/AddressBanner'
import BLockFeatureTwo from "../home-four/BLockFeatureTwo";

const HomeSix = () => {
   return (
      <>
         <HeaderOne />
         <HeroBanner />
         <BLockFeatureOne />
         <BLockFeatureFour />
      <PropertyTwo style={false} />
         
         <AddressBanner style={false} />
         <FancyBannerThree />
         <FooterFive />
      </>
   )
}

export default HomeSix
