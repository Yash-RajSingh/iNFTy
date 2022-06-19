import './detailedCollection.css'
import { useParams } from "react-router-dom"
import BoredApe from '../../data/BoredApe.json'
import CreepzGenesis from '../../data/CreepzGenesis.json'
import CyberKong from '../../data/CyberKong.json'
import DeadFellaz from '../../data/DeadFellaz.json'
import LlamaVerse from '../../data/LlamaVerse.json'
import NeoTokyoCitizen from '../../data/NeoTokyoCitizen.json'
import { useScrollTo } from 'react-use-window-scroll'

const Paramchecker = () => {
    let { name } = useParams();
    const instance = name;
    switch (`${instance}`) {
        case "BoredApe": return BoredApe;
        case "CreepzGenesis": return CreepzGenesis;
        case "CyberKong": return CyberKong;
        case "DeadFellaz": return DeadFellaz;
        case "LlamaVerse": return LlamaVerse;
        case "NeoTokyoCitizen": return NeoTokyoCitizen;
    }
}

const DetailedCollection = () => {
    const scrollTo = useScrollTo();
    window.scrollTo({top: 0})
    let { name } = useParams();
    let current = Paramchecker()
    return (
        <>
            <div className='detailedCollectionContainer'>
                <h3>Currently in {name} collection</h3>
                <div className="detailedCollectionWrapper">
                    {current.map((data) => {
                        console.log(data.image)
                        return (
                            <div className="detailedCollectionCard" key={data.name}>
                                <img src={data.image} alt={data.name} />
                                <div className="subDetailedCollectionCard">
                                    <span>{data.price} ETH</span>
                                    <p>{data.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default DetailedCollection;