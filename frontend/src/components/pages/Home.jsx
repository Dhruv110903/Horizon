import React from 'react'
import  "../../styles/home.css"
import {Container, Row, Col} from 'reactstrap'
import heroImg from "../../assets/images/hero-img01.jpg"
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo  from '../../assets/images/hero-video.mp4'
// import worldImg from '../../assets/images/world.png'
// import experienceImg from '../../assets/images/experience.png'
import experienceImg from '../../assets/images/trip.png'

// import Subtitle from '../../shared/Subtitle'
// import SearchBar from '../../shared/SearchBar'
import ServiceList from '../../services/ServiceList'
import FeaturedTourList from '../Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery'
import Testimonials from '../Testimonial/Testimonials'
import Newsletter from '../../shared/Newsletter'



const Home = () => {
  return  <>
      {/*==================hero section start====================*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
               {/* <div className="hero__subtitle d-flex align-items-center">
                   <Subtitle subtitle={'Travel and Explore!!'}/>
                   <img src={worldImg} alt="" />                  
               </div> */}
               <h1>Athithidevo Bhava!<span className="highlight">अतिथिदेवो भव!</span></h1>
               <p>Life is a journey, enjoy the trip. Aim for the sky, but move slowly, enjoying every step along the way. 
                It is all those little steps that make the journey complete. The journey is a reward.</p>
            </div>
          </Col>
            <Col lg='2'>
              <div className='hero__img-box'>
               <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-4'>
               <video src={heroVideo} alt="" controls/>
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-5'>
               <img src={heroImg02} alt="" />
              </div>
            </Col>
          {/* <SearchBar /> */}
        </Row>
      </Container>
    </section>
         {/*==================hero section start=================*/}
         <section>
          <Container>
            <Row>
              <Col lg="3">
                <h5 className="services__subtitle">
                  What we Serve
                </h5>
                <h2 className="services__title">
                  We offer Best Services
                </h2>
              </Col>
              <ServiceList />
            </Row>
          </Container>
         </section>

          {/*==================featured tour section start======================*/}
            <section>
              <Container>
                <Row>
                <Col lg='22' className='mb-5'>
                  {/* <Subtitle subtitle={"Explore"} /> */}
                  <h5 className="services__subtitle">
                  Explore
                </h5>
                  <h2 className="featured__tour-title">
                    Our Featured Tours.
                  </h2>
                </Col>
                <FeaturedTourList />
                </Row>
                
              </Container>
            </section>

          {/*==================featured tour section end======================*/}
          {/*==================experience section start=========================*/}

          <section>
            <Container>
              <Row>
                <Col lg='6'>
                  <div className="experience__content">
                    {/* <Subtitle subtitle={'Experience'} /> */}
                    <h5 className="services__subtitle">
                    Experience
                </h5>
                    <h2>
                      With our all experience <br/> we will serve you.
                    </h2>
                    <p>
                    Traveling , it leaves you speechless, then turns you into a storyteller.
                    <br/>
                    We travel, some of us forever, to seek other states, other lives, other souls.
                    </p>
                  </div>
                  <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                      <span>12k+</span>
                      <h6>Successful Trips!</h6>
                    </div>
                    <div className="counter__box">
                      <span>2k+</span>
                      <h6>Regular Clients</h6>
                    </div>
                    <div className="counter__box">
                      <span>10</span>
                      <h6>Years of Experience!</h6>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="experience__img">
                    <img src={experienceImg} alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
           {/*==================experience section end=========================*/}
           {/*==================gallery section start==========================*/}
           <section>
            <Container>
              <Row>
                <Col lg='12'>
                  {/* <Subtitle subtitle={'Gallery'} />*/}
                  <h5 className="services__subtitle">
                    Gallery
                </h5>
                  <h2 className="gallery__title">
                    Visit our customers Tour Gallery!
                  </h2>
                </Col>
                <Col lg='12'>
                 <MasonryImagesGallery  ku/>
                </Col>
              </Row>
            </Container>
           </section>
           {/*==================gallery section end============================*/}
           {/*==================testimonial section start============================*/}
           <section>
            <Container>
              <Row>
                <Col lg='12'>
                  {/* <Subtitle subtitle={'Fans Love'} /> */}
                  <h5 className="services__subtitle">
                    Customer's Love
                </h5>
                  <h2 className="testimonial__title">What our Customer's say about us?</h2>
                </Col>
                <Col lg='12'>
                  <Testimonials />
                </Col>
              </Row>
            </Container>
           </section>
            {/*==================testimonial section end============================*/}
          <Newsletter />



  </>
}

export default Home
