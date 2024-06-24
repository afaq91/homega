"use client"
import Image from "next/image"
import Link from "next/link"

import footerLogo from "@/assets/images/logo/logo_01.png"
import footer_data from "@/data/home-data/FooterData"

const FooterFive = () => {
   return (
      <div className="footer-four dark-bg position-relative z-1">
        

         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1">
               <div className="row">
                  <div className="col-xl-3 col-lg-4 mb-60">
                     <div className="footer-intro">
                        <div className="logo mb-20 d-none">
                           <Link href="/">
                              <Image src={footerLogo} alt="" width={220}/>
                           </Link>
                        </div>
                        <p className="mb-45 md-mb-20">11910 Clyde Rapid Suite 210, Willyand, Virginia, United States</p>
                        <ul className="style-none d-flex align-items-center social-icon">
                           <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                           <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                           <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                        </ul>
                     </div>
                  </div>

                  {footer_data.filter((items) => items.page === "home_5").map((item) => (
                     <div key={item.id} className={`col-md-4 mb-30 ${item.widget_class}`}>
                        <div className={`footer-nav ${item.widget_class2}`}>
                           <h5 className="footer-title text-white">{item.widget_title}</h5>
                           <ul className="footer-nav-link style-none">
                              {item.footer_link.map((li, i) => (
                                 <li key={i}><Link href={li.link}>{li.link_title}</Link></li>))}
                           </ul>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="bottom-footer">
               <p className="m0 text-center fs-16">Copyright @2024 HOMEGA LLC.</p>
            </div>
         </div>
      </div>
   )
}

export default FooterFive
