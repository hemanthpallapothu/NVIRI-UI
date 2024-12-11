import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const FeaturedVendors=()=>{
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div className='slide-aliement'>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
            </div>

          </div>
          <div>
          <div className='slide-aliement'>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className='slide-aliement'>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
            </div>
          </div>
          <div>
          <div className='slide-aliement'>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
                <div className='vender-card'>
                    <div className='vender-top-container-alinement'>
                        <img className='vender-picture' alt="Vender" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733892016/Avatar_2_h2r1ay.png"/>
                        <h1 className='vender-name'>Metro Hardware</h1>
                    </div>
                    <div className='vender-bottum-card-alinement'>
                        <div>
                            <p className='vender-bottum-number'>22</p>
                            <p className='vender-bottum-text'>Services</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>8/10</p>
                            <p className='vender-bottum-text'>Rating</p>
                        </div>
                        <div>
                            <p className='vender-bottum-number'>89</p>
                            <p className='vender-bottum-text'>Reviews</p>
                        </div>
                        <button type="button" className='show-more'>Show more</button>
                    </div>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
export default FeaturedVendors