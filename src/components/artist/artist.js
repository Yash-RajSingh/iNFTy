import './artist.css'
import artists from '../../data/artist.json'
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
const Artists = () => {
    const slicedArtists = artists.slice(0, 6)
    return (
        <>
            <div className="artist-container">
                <h4>Top Seller &#10024;</h4>
                <div className="artistWrapper">
                    {slicedArtists.map((artist) => {
                        return (
                            <div className="artistCard" key={artist.name}>
                                <img src={artist.profile} alt={artist.name} />
                                <div className="subArtistCard">
                                    <p className='name'>{artist.name}</p>
                                    <p className='value'>{artist.netValue} <span>ETH</span></p>
                                    <div>
                                        <FaTelegramPlane className='icon' />
                                        <AiOutlineUserAdd className='icon' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Artists;