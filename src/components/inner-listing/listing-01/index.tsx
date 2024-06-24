import FooterFive from "@/layouts/footers/FooterFive"
import ListingOneArea from "./ListingOneArea"
import FancyBanner from "@/components/common/FancyBanner"
import HeaderOne from '@/layouts/headers/HeaderOne';

const ListingOne = () => {
   return (
      <>
          <HeaderOne />
         <ListingOneArea />
         <FancyBanner />
         <FooterFive />
      </>
   )
}

export default ListingOne;
