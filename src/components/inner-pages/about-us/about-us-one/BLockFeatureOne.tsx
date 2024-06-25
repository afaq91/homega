import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_06.svg";
import Count from "@/components/common/Count";

interface ContentType {
   sub_title: string;
   desc_1: JSX.Element;
   title_1: string;
   title_2: string;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
}

const feature_content: ContentType = {
   sub_title: "About us",
   desc_1: (<></>),
   title_1: "Who we are?",
   title_2: "Our Mission",
   desc_2: (<>Our founders Dustin Moskovitz & Justin Rosenstein met  leading Engineering teams at Facebook. As operations scaled, they grew frustrated by how difficult coordinate</>),
   desc_3: (<>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore aliqua.</>),
}

const { sub_title, desc_1, title_1, title_2, desc_2, desc_3 } = feature_content;

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-two mt-150 xl-mt-100">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-lg-6 wow fadeInLeft">
                  <div className="me-xxl-4">
                     <div className="title-one mb-60 lg-mb-40">
                        
                        <h3>ABOUT US</h3>
                        <p className="fs-22">At Homega Real Estate, we specialize in providing luxury real estate services across the vibrant landscape of the United Arab Emirates.
                            Whether you are looking to buy, sell, or rent a property, our dedicated team of professionals is committed to helping you navigate through the complexities of the real estate market with ease.</p>
                     </div>
                     <Link href="/contact" className="btn-two">Contact Us</Link>
                     
                  </div>
               </div>

               <div className="col-lg-6 wow fadeInRight">
                  <div className="block-two md-mt-40">
                     <div className="bg-wrapper">
                        <h5>Our Vision</h5>
                        <p className="fs-22 lh-lg mt-20">Our vision is to be the most trusted and preferred real estate partner in the UAE, known for our commitment to excellence, integrity, and unparalleled customer service.
                            We strive to exceed expectations by delivering personalized solutions that cater to the unique needs of each client.</p>
                        <h5 className="top-line">{title_2} </h5>
                        <p className="fs-22 lh-lg mt-20">Our mission is to redefine the real estate experience by offering personalized services tailored to meet the unique needs of each client. 
                           With a deep understanding of the local market trends and an extensive network of industry connections, we ensure that our clients receive the most comprehensive and reliable information to make informed decisions.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
