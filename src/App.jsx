import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Services from './components/service/Services';
import PriceNplan from './components/price&plan/PriceNplan';
import Faq from './components/faq/Faq';
import WhyChoose from './components/whyChoose/WhyChoose';
import Testimonial from './components/testimonial/Testimonial';
import NewsFeed from './components/newsFeed/NewsFeed';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <PriceNplan/>
      <Faq/>
      <WhyChoose/>
      <Testimonial/>
      <NewsFeed/>
      <Footer/>
    </>
  );
};

export default App;