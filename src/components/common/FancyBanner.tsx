"use client"
import Image from "next/image"
import Link from "next/link"
import titleShape from "@/assets/images/shape/title_shape_06.svg"

const FancyBanner = ({ style }: any) => {
   return (
      <div className="fancy-banner-two position-relative z-1 pt-190 lg-pt-50 pb-190 lg-pb-50">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-12">
                  <div className="title-one text-center text-lg-center md-mb-40 pe-xl-5">
                     <h3 className="text-white m0">Get Your Property Consultation With<br></br> <span> HOMEGA{style ? "" : <Image src={titleShape} alt="" className="lazy-img" />}</span></h3>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
   )
}

export default FancyBanner
