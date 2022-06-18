import './landing.css'
import man from '../../assets/man.png'
import Ticker from './ticker';

const LandingContent = () => {
    return (
        <>
            <div className='landingContent'>
                <div className='landing-left'>
                    <p className='slogan'>Discover,<br />colelct and sell dope NFTs</p>
                    <p className='catchphrase'>The world's largest digital marketpalce for crypto collectibles and non-fungible tokens (NFTs).</p>
                    <button>Explore</button>
                </div>
                <div className='landing-right'>
                    <img src={man} className='main-img' />
                    <div className='auctionStats'>
                        <div className='auctionStatContainer'> Current bid <p>5.00 ETH</p> $11,373.55</div>
                        <div className='auctionStatContainer middle'>Auction ends in
                            <div>
                                <Ticker />
                            </div>
                        </div>
                        <div className='auctionStatContainer'>
                            <div className='buttonContainer'>
                                <button>Bid now</button>
                                <button>See item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingContent;