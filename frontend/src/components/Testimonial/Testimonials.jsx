import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ]
    }

    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>Planning our dream getaway was a breeze, thanks to Horizon's website!
                     It wasn't just a trip; it was an unforgettable odyssey. 
                     From the comprehensive guidance on the Dodecanese Greek Islands
                      to the seamless booking process, every click felt like a step 
                      closer to paradise.</p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                    <div >
                        <h6 className='mb-0 mt-3'>Rahul Gupta</h6>

                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>Our dream getaway planning became a delight, all thanks to Horizon's
                     website! It evolved into an unforgettable
                      odyssey. The comprehensive insights into the Mumbai's beach and the effortless booking process made
                       us feel like we were inching
                        closer to paradise with every click.</p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div >
                        <h6 className='mb-0 mt-3'>Priya Mishra</h6>

                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
            <p>Planning our dream getaway was a breeze, thanks to Horizon's website!
                     It wasn't just a trip; it was an unforgettable odyssey. 
                     From the comprehensive guidance on the Dodecanese Greek Islands
                      to the seamless booking process, every click felt like a step 
                      closer to paradise.</p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div >
                        <h6 className='mb-0 mt-3'>Aryan Sharma</h6>

                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
            <p>Our dream getaway planning became a delight, all thanks to Horizon's
                     website! It evolved into an unforgettable
                      odyssey. The comprehensive insights into the Mumbai's beach and the effortless booking process made
                       us feel like we were inching
                        closer to paradise with every click.</p>

                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div >
                        <h6 className='mb-0 mt-3'>Pooja Bhat</h6>

                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Testimonials
