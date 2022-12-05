import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    //  const navigate = useNavigate();

    return (
        <>
            {/* <div className="gap"></div> */}
            <div className="row1">
                <div className="call">
                    <h3>Questions?Call <a href="tel:000-800-040-1843">000-800-040-1843
                    </a></h3>
                </div>
                <div className="footer">
                    {/* <div>
                    
                        <li onClick={()=>navigate("/faq")}>FAQ</li>
                        <li onClick={()=>navigate("/help")}>Help Centre</li>
                        <li onClick={()=>navigate("/login")}>Account</li>
                        <li onClick={()=>navigate("/media")}>Media Centre</li>
                    </div> */}
                    <div>
                        <li>FAQ</li>
                        <li>Ways to Watch</li>
                        <li>Cookie Preferences</li>
                        <li>Speed Test</li>
                        </div>
                    <div>
                        <li>Help Center</li>
                        <li>Investor Relations</li>
                        <li>Corporate Information</li>
                        <li> Legal Notices</li>
                        </div>

                    <div>
                    <li>Account</li>
                    <li>jobs</li>
                    <li>Privacy</li>
                    <li>Only on Netflix</li><br/>
                    </div>

                    <div>
                    <li>Media Center</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                    </div>

                </div>
                <div className="call1">
                    <div className='call2'>
                    <select class="language">
                        <option value="">&#xF3EE; English</option>
                        <option value="">&#xF3EE; मराठी</option>
                        <option value="">&#xF3EE; हिन्दी</option>
                    </select>
                    <li>Netflix India</li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;