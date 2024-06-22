import FooterFour from "@/layouts/footers/FooterFour"
import ListingOneArea from "./ListingOneArea"
import FancyBanner from "@/components/common/FancyBanner"
import HeaderOne from '@/layouts/headers/HeaderOne';

const ListingOne = () => {
   return (
      <>
          <HeaderOne />
         <ListingOneArea />
         <FancyBanner />
         <FooterFour />
      </>
   )
}

export default ListingOne;
