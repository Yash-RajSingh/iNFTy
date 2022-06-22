import "./footer.css";
import logo from "../../assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiDiscord, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerDiv1">
          <img src={logo} alt="Logo" />
          <h2>iNFTy</h2>
          <p>
            The world's largest digital marketplace for crypto collectibles and
            non-fungible tokens (NFTs). Buy, Sell and discover exclusive digital
            assets.
          </p>
          <div className="socials">
            <BsTwitter className="sIcons" />
            <SiDiscord className="sIcons" />
            <SiFacebook className="sIcons" />
            <SiInstagram className="sIcons" />
            <SiLinkedin className="sIcons" />
          </div>
        </div>
        <div className="footer-right">
          <div className="footerDiv">
            <p className="head">Resources</p>
            <p className="subhead">Help Center</p>
            <p className="subhead">Partners</p>
            <p className="subhead">Suggestions</p>
            <p className="subhead">Newsletter</p>
          </div>
          <div className="footerDiv">
            <p className="head">Company</p>
            <p className="subhead">About</p>
            <p className="subhead">Careers</p>
            <p className="subhead">Rankings</p>
            <p className="subhead">Activity</p>
          </div>
        </div>
      </div>
      <p id="copyright"> &#169; 2021 iNFTy, All rights reserved</p>
    </>
  );
};

export default Footer;
