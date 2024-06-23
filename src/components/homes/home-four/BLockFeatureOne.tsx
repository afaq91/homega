import FeatureOne from "@/components/common/FeatureOne"

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-nine bg-pink-two image-bg position-relative z-1 mt-0 xl-mt-120 pt-85 pb-110 xl-pb-80">
         <div className="container container-large">
            <div className="position-relative">
               <div className="row">
                  <div className="col-xxl-6 col-xl-7 col-lg-8">
                     <div className="title-one mb-30 lg-mb-20 wow SlideInRight">
                        <h3>We’r here to help you find properties.</h3>
                        <p className="fs-22">Over 100+ listings of apartments, villas and plots available.</p>
                     </div>
                  </div>
               </div>

               <div className="row gx-xxl-5">
                  <FeatureOne />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
