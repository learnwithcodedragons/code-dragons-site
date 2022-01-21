import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import constants from '../../data/constants';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        CodeDragons
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#content">
          Content
        </AnchorLink>
        <AnchorLink className="px-4" href="#promise">
          Promise
        </AnchorLink>
        <AnchorLink className="px-4" href="#guarantee">
          Guarantee
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden lg:block">
        <Button className="text-sm" href={constants.courseLink}>Buy Now</Button>
        <Button href={constants.courseLink} buttonColor='bg-primary-lighter'>Free Starter</Button>
      </div>
    </div>
  </header>
);

export default Header;
