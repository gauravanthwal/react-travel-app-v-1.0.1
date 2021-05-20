import React from 'react'
import './Footer.css'
import Button from '../Layouts/Button'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Footer = () => {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-ares">
                    <form>
                        <input type="email" className="footer-input" name='email' placeholder='Your Email'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="input-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Testimonials</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
