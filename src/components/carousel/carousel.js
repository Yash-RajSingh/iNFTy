import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PopularImages from '../../data/popular.json'
import './carousel.css'

const Carousel = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        // console.log(carousel.current.scrollWidth , carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    })
    return (
        <div className="carousel-container">
            <h4>Trending &#9889;</h4>
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
                {PopularImages.map((data) => {
                    return (
                        <motion.div className="item" key={data.img} >
                            <img src={data.img} alt={data.img} />
                            <div className="data-div">
                                <span>{data.price} ETH</span>
                                <p>{data.name}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </motion.div>
            <span style={{ float: "right", marginTop: "2%", font: "1rem 'joan'", letterSpacing: "1px" }}>Scroll &#x2192;</span>
        </motion.div>
        </div>
    );
}

export default Carousel;