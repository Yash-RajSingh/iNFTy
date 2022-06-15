import './header.css'
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="subhead-left">
                    <img src={logo} alt="Logo" />
                    <h1>iNFTy</h1>
                </div>
                <div className="subhead-right">
                    <input type="text" placeholder='Search'/>
                    <button>Explore</button>
                </div>
            </div>
        </>
    );
}

export default Header;