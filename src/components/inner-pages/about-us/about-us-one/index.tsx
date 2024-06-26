import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BLockFeatureOne from "./BLockFeatureOne"
import VideoBanner from "@/components/homes/home-seven/VideoBanner"
import BLockFeatureFive from "@/components/homes/home-one/BLockFeatureFive"
import Feedback from "@/components/homes/home-five/Feedback"
import AgentArea from "@/components/homes/home-one/AgentArea"
import Brand from "./Brand"
import FooterFive from "@/layouts/footers/FooterFive"
import FancyBanner from "@/components/common/FancyBanner"
import FancyBannerThree from '@/components/homes/home-one/FancyBannerThree';

const AboutUsOne = () => {
   return (
      <>
         <HeaderOne style={true} />
         {/* <BreadcrumbOne title="About Agency" sub_title="About us" style={false} /> */}
         <BLockFeatureOne />
         
         <BLockFeatureFive style={true} />
         {/* <Feedback style={true} />
         <AgentArea style={false} /> */}
        <FancyBannerThree />
         <FooterFive />
      </>
   )
}


export default AboutUsOne

