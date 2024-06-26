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
                  <div className="col-xxl-12 col-xl-6 col-lg-7 text-center">
                     <div className="position-relative pe-xxl-5 wow fadeInLeft">
                        <h1 className="hero-heading">ELAVATING LUXURY LIVING</h1>
                     </div>
                     <div className="ps-xxl-1 pt-15 wow fadeInRight">
                        
                        <div className="d-flex flex-wrap justify-content-center">
                           <div className="d-flex flex-column justify-content-center align-items-start mt-0">
                           <Link href="/contact" className="btn-five rounded-0 md mt-20"><span>Contact Us</span> <i className="bi bi-arrow-up-right"></i></Link>  
                              
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
