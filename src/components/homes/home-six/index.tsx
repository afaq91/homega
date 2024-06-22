'use client'
import { useEffect } from 'react';

import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroBanner from './HeroBanner';
import BLockFeatureOne from '../home-four/BLockFeatureOne';
import BLockFeatureFour from '../home-five/BLockFeatureFour';
import PropertyTwo from '../home-three/PropertyTwo';
import AddressBanner from '../home-four/AddressBanner';
import FancyBannerThree from '../home-one/FancyBannerThree';
import FooterFive from '@/layouts/footers/FooterFive';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'


const HomeSix = () => {
 

  return (
    <>
      <HeaderOne />
      <HeroBanner />
      <BLockFeatureOne />
      <PropertyTwo style={false} />
      <BLockFeatureFour />
      <AddressBanner style={false} />
      <FancyBannerThree />
      <FooterFive />
    </>
  );
};

export default HomeSix;
