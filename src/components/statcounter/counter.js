import { useEffect, useState } from "react";

const StatCounter = () => {
  const [userCounter, setuserCounter] = useState(0);
  const [artCounter, setArtCounter] = useState(0);
  const [artistCounter, setArtistCounter] = useState(0);
  useEffect(() => {
    userCounter < 42 && setTimeout(() => setuserCounter(userCounter + 1), 25);
    artCounter < 8 && setTimeout(() => setArtCounter(artCounter + 1), 50);
    artistCounter < 2 &&
      setTimeout(() => setArtistCounter(artistCounter + 1), 50);
  });
  return (
    <>
      <div className="statCounter" style={{"marginTop": "10%" }}>
        <div className="stats">
          <span className="statdisplay">{userCounter}K+</span>
          <br /> Users Active
        </div>
        <div className="stats">
          <span className="statdisplay">{artCounter}K+</span>
          <br /> Artworks
        </div>
        <div className="stats">
          <span className="statdisplay">{artistCounter}K+</span>
          <br /> Artist
        </div>
      </div>
    </>
  );
};

export default StatCounter;
