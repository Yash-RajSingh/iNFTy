import './collection.css'
import collections from '../../data/collection.json'
const Collections = () => {
    return (
        <>
            <div className="collection-container">
                <h4>Hot Collections &#128293;</h4>
                <div className="collectionWrapper">
                    {collections.map((data) => {
                        return (
                            <div className="collectionCard" key={data.name}>
                                <img src={data.cover} alt={data.name} />
                                <div className="subCollectionCard">
                                    <span>{data.count} items</span>
                                    <p>{data.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Collections;