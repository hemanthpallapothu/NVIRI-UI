import { FaArrowRight } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


import './index.css'

const Footer=()=>(
    <>
        <div className='footer-bg-container'>
            <div className="footer-bg-container-alinement">
                <div className="footer-card-container">
                    <div>
                        <p className='footer-text'>Get in touch with us</p>
                        <div className="footer-input-button-alinement">
                            <input type='text' placeholder='Email address' className="footer-email-input"/>
                            <button type="button" className="footer-email-button">
                                <FaArrowRight className="arrow-icon"/>
                            </button>
                        </div>
                    </div>
                <p className="footer-paragraph">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                </div>
                <button className="footer-service-button">Book a Service</button>
                <div>
                    <p className="footer-conditions-text">Terms</p>
                    <p className="footer-conditions-text">Privacy</p>
                    <p className="footer-conditions-text">Cookies</p>
                    <p className="footer-conditions-text">Business Login</p>
                </div>
            </div>
            <hr className="hr"/>
            <div className="footer-bottum-section-alinement">
                <img alt="Company Logo" className="footer-company-logo" src="https://res.cloudinary.com/duafmawoq/image/upload/v1733890570/blue_logo_smuwkc.png"/>
                <div>
                    <FaLinkedinIn className="footer-icon"/>
                    <FaFacebookF className="footer-icon"/>
                    <FaTwitter className="footer-icon"/>
                </div>
            </div>

        </div>
    </>
)

export default Footer