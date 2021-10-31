import React, { Component } from 'react';
import NavBar from '../../components/navbar/nav';
import one from '../../assets/images/1.jpg';
import two from '../../assets/images/2.jpg';
import three from '../../assets/images/3.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Features from '../../components/features/features';
import Contact from '../../components/contact/contact';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <div className="m-3">
          <Carousel
            additionalTransfrom={0}
            autoPlaySpeed={3000}
            draggable
            swipeable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            sliderClass=""
            slidesToSlide={1}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 1024,
                  min: 0,
                },
                items: 2,
                partialVisibilityGutter: 1,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 0,
              },
            }}
          >
            <div className="grid grid-flow-col gap-4">
              <img src={one} className="rounded-lg" />
              <h1 className="text-center z-10 text-black text-6xl">
                Tax Professionals
              </h1>
            </div>
            <div className="grid grid-flow-col gap-4">
              <h1 className="text-center z-10 text-black text-6xl">
                Tax Professionals
              </h1>
              <img src={two} className="rounded-lg" />
            </div>
            <div className="grid grid-flow-col gap-4">
              <img src={three} className="rounded-lg" />
              <h1 className="text-center z-10 text-black text-6xl">
                Tax Professionals
              </h1>
            </div>
          </Carousel>
        </div> */}
        <div className="my-10">
          <Features />
        </div>
        <div className="my-10 px-80">
          <Contact />
        </div>
      </div>
    );
  }
}

export default Home;
