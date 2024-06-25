import FooterFive from "@/layouts/footers/FooterFive"
import FancyBanner from "@/components/common/FancyBanner"
import ListingTwoArea from "./ListingTwoArea"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FancyBannerThree from "@/components/homes/home-one/FancyBannerThree"

const ListingTwo = () => {
   return (
      <>
         <HeaderOne/>
         <ListingTwoArea style={false} />
         <FancyBannerThree />
         <FooterFive />
      </>
   )
}

export default ListingTwo;
