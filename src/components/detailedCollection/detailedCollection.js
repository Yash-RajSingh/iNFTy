import "./detailedCollection.css";
import { useParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import BoredApe from "../../data/BoredApe.json";
import CreepzGenesis from "../../data/CreepzGenesis.json";
import CyberKong from "../../data/CyberKong.json";
import DeadFellaz from "../../data/DeadFellaz.json";
import LlamaVerse from "../../data/LlamaVerse.json";
import NeoTokyoCitizen from "../../data/NeoTokyoCitizen.json";
import { useScrollTo } from "react-use-window-scroll";

const Paramchecker = () => {
  let { name } = useParams();
  const instance = name;
  switch (`${instance}`) {
    case "BoredApe":
      return BoredApe;
    case "CreepzGenesis":
      return CreepzGenesis;
    case "CyberKong":
      return CyberKong;
    case "DeadFellaz":
      return DeadFellaz;
    case "LlamaVerse":
      return LlamaVerse;
    case "NeoTokyoCitizen":
      return NeoTokyoCitizen;
  }
};

const DetailedCollection = () => {
  const scrollTo = useScrollTo();
  window.scrollTo({ top: 0 });
  let { name } = useParams();
  let current = Paramchecker();
  const [width, setWidth] = useState();
  let screenWidth = useRef()
  useEffect(()=>{
    console.log(screenWidth.current.offsetWidth)
    setWidth(screenWidth.current.offsetWidth)
  })
  if(width > 720){
    return (
      <>
        <div className="detailedCollectionContainer" ref={screenWidth}>
          <h3>Currently in the {name} collection :</h3>
          <div className="detailedCollectionWrapper">
            {current.map((data) => {
              return (
                <div className="detailedCollectionCard" key={data.name}>
                  <img src={data.image} alt={data.name} />
                  <div className="subDetailedCollectionCard">
                    <span>{data.price} ETH</span>
                    <p>{data.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="final">That's all in the {name} collection so far!</p>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div className="detailedCollectionContainer" ref={screenWidth}>
          <h3>Currently in the {name} collection :</h3>
          <div className="detailedCollectionWrapper">
            {current.map((data) => {
              return (
                <div className="detailedCollectionCard" key={data.name}>
                  <img src={data.image} alt={data.name} />
                  <div className="subDetailedCollectionCard">
                    <p>{data.name}</p>
                    <p className="p2">Price : <span>{data.price} ETH</span></p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="final">That's all in the {name} collection so far!</p>
        </div>
      </>
    );
  }
};

export default DetailedCollection;
