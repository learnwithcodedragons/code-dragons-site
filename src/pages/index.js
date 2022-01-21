import React from 'react';
import Button from '../components/Button';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';;
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import constants from '../data/constants';
import Teacher from '../svg/teacher';
import Promise from '../svg/promise';
import MoneyBack from '../svg/MoneyBack'

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2 mb-8">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none mr-8">
          Learn GraphQL .NET quickly and comprehensively
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Take our free video course to get you started or purchase our comprehensive course to really get ahead!
          </p>
          <div class="flex flex-wrap xs:columns-1">
              <div className="w-full grid justify-items-stretch sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-8 md:mt-16">
                <Button href={constants.courseLink}>Buy Now</Button>
              </div>
              <div className="w-full grid justify-items-stretch sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-8 md:mt-16">
                <Button href={constants.courseLink} buttonColor='bg-primary-lighter'>Free Starter</Button>
              </div>
            </div>
          </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <SplitSection
      id="content"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Course Content</h3>
          <ul className='text-left list-disc mt-8 text-xl font-light leading-relaxed'>
            <li>
              Fetching data with GraphQL Query language
            </li>
            <li>
              Creating, updating, deleting data with GraphQL Mutations 
            </li>
            <li>
              Realtime notifications with GraphQL Subscriptions 
            </li>
            <li>
              Build fully working GraphQL API and Client
            </li>
            <li>
              Secure your application with authentication and authorisation
            </li>
          </ul>
        </div>
      }
      secondarySlot={<Teacher/>}
    />
    <section id="promise">
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            The CodeDragons Instructor Promise
          </h3>
          <ul className='text-left list-disc mt-8 text-xl font-light leading-relaxed'>
            <li>
               We promise to cover every topic in detail
            </li>
            <li>
               Every step is explained clearly
            </li>
            <li>
               We do not miss out any steps 
            </li>
            <li>
              We will answer all questions in the Q&A
            </li>
            <li>
              Our courses are created by industry experts
            </li>
          </ul>
        </div>
      }
      secondarySlot={<Promise/>}
    />
    </section>
    <section id="guarantee">
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Money Back Guarantee
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          We want you to be satisfied, so any courses purchased from CodeDragons can be refunded within 30 days. 
          For whatever reason, if you are unhappy with a course, you can request a refund
          </p>
        </div>
      }
      secondarySlot={<MoneyBack/>}
    />
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What our Learner think</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to get ahead</h3>
      <p className="mt-8 text-xl font-light">
      Learn GraphQL .NET quickly and comprehensively
      </p>  
      <div class="flex flex-wrap xs:columns-1">
              <div className="grid justify-items-end w-1/2  mt-8 md:mt-16">
                <Button href={constants.courseLink}>Buy Now</Button>
              </div>
              <div className="grid justify-items-start w-1/2 mt-8 md:mt-16">
                <Button href={constants.courseLink} buttonColor='bg-primary-lighter'>Free Starter</Button>
              </div>
            </div>
    </section>
  </Layout>
);

export default Index;
