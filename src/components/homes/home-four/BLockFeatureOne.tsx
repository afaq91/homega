'use-client'
import FeatureOne from "@/components/common/FeatureOne"
import feature6Icon_1 from "@/assets/images/icon/icon_35.svg";
import feature6Icon_2 from "@/assets/images/icon/icon_36.svg";
import feature6Icon_3 from "@/assets/images/icon/icon_37.svg";

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-nine bg-pink-two image-bg position-relative z-1 mt-0 xl-mt-120 pt-85 pb-110 xl-pb-80">
         <div className="container container-large">
            <div className="position-relative">
               <div className="row">
                  <div className="col-xxl-6 col-xl-7 col-lg-8">
                     <div className="title-one mb-30 lg-mb-20 wow fadeInUp">
                        <h3>About Us</h3>
                        <p className="fs-22">Welcome to Homega Real Estate, your premier partner for visionary real estate projects in the vibrant UAE market. Founded on a commitment to integrity, innovation, and excellence, we specialize in creating distinctive residential and commercial developments that redefine urban living.</p>
                     </div>

<div className="d-flex customblockicons">

<div className="customiconcontainer">
 <div className="iconcustom">  
<img alt="" loading="lazy" width="27" height="25" decoding="async" data-nimg="1" className="lazy-img" src={feature6Icon_1}></img>
</div>
<h5 className="mt-35 mb-20">Buy</h5>
</div>


<div className="customiconcontainer">
<div className="iconcustom">  
<img alt="" loading="lazy" width="29" height="27" decoding="async" data-nimg="1" className="lazy-img" src={feature6Icon_2}></img>
</div>
<h5 className="mt-35 mb-20">Rent</h5>
</div>


<div className="customiconcontainer">
<div className="iconcustom">  
<img alt="" loading="lazy" width="28" height="27" decoding="async" data-nimg="1" className="lazy-img" src={feature6Icon_3}></img>
</div>
<h5 className="mt-35 mb-20">Sell</h5>
</div>


</div>


                  </div>
               </div>

               {/* <div className="row gx-xxl-5">
                  <FeatureOne />
               </div> */}
            </div>
         </div>
      </div>
   )
}


export default BLockFeatureOne
