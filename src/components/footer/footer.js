import './footer.css'
import logo from '../../assets/logo.png'
import { BsTwitter } from "react-icons/bs";
import { SiDiscord, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='footerDiv1'>
                    <img src={logo} alt="Logo" />
                    <h2>iNFTy</h2>
                    <p>The world's largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell and discover exclusive digital assets.</p>
                    <div className="socials">
                        <BsTwitter className='sIcons'/>
                        <SiDiscord className='sIcons'/>
                        <SiFacebook className='sIcons'/>
                        <SiInstagram className='sIcons'/>
                        <SiLinkedin className='sIcons'/>
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='footerDiv'>
                        <p className="head">Resources</p>
                        <p>Help Center</p>
                        <p>Partners</p>
                        <p>Suggestions</p>
                        <p>Newsletter</p>
                    </div>
                    <div className='footerDiv'>
                        <p className="head">Company</p>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Rankings</p>
                        <p>Activity</p>
                    </div>
                </div>
            </div>
            <span id='copyright'> &#169; 2021 iNFTy, All rights reserved</span>
        </>
    );
}

export default Footer;