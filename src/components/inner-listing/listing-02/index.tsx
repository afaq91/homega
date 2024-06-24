import FooterFive from "@/layouts/footers/FooterFive"
import FancyBanner from "@/components/common/FancyBanner"
import ListingTwoArea from "./ListingTwoArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ListingTwo = () => {
   return (
      <>
         <HeaderOne/>
         <ListingTwoArea style={false} />
         <FancyBanner />
         <FooterFive />
      </>
   )
}

export default ListingTwo;
