import { useState, useEffect } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader'
import './loader.css'
const PreLoader = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    })
    return (<>
        {loader &&
            <div className="loader">
                <div className="loaderWrapper">
                    <ScaleLoader height={80} width={10} color={'white'} loading={loader} speedMultiplier={1} />
                </div>
            </div>
        }
    </>);
}

export default PreLoader;