import Image from "next/image"
import titleShape from "@/assets/images/shape/shape_58.svg"
import bannerimg from "@/assets/images/assets/screen_06.png"
import Link from "next/link"
import DropdownSix from "@/components/search-dropdown/home-dropdown/DropdownSix"

const HeroBanner = () => {
   return (
      <div className="hero-banner-six z-2 pt-200 lg-pt-150">
         <div className="container container-large">
            <div className="position-relative">
               <div className="row">
                  <div className="col-xxl-7 col-xl-6 col-lg-7">
                     <div className="position-relative pe-xxl-5 wow fadeInLeft">
                        <h1 className="hero-heading">Best Real Estate Consultancy</h1>
                     </div>
                     <div className="ps-xxl-1 pt-35 wow fadeInRight">
                        <p className="color-dark sub-heading mb-40 lg-mb-20">Over 745,000 listings, apartments, lots and<br></br>plots available now!</p>
                        <div className="d-flex flex-wrap justify-content-between align-items-start">
                           <div className="d-flex flex-column justify-content-center align-items-start mt-0">
                           <Link href="/contact" className="btn-five rounded-0 md mt-20"><span>Contact us</span> <i className="bi bi-arrow-up-right"></i></Link>  
                              
                           </div>
                           
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-5 ms-auto">
                     
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroBanner
