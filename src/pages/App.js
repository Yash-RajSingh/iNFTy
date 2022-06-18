import './App.css'
import '../fonts/fonts.css'
import HomeComponent from './homeComponent/Home';
import Header from '../components/header/header'
import Footer from '../components/footer/footer';
import { useState, useEffect } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader'
const App = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    })
    return (<>
        {loader ?
            <div className="loader">
                <div className="loaderWrapper">
                    <ScaleLoader height={80} width={10} color={'white'} loading={loader} speedMultiplier={1} />
                </div>
            </div>
            :
            <div>
                <Header />
                <div className='pseudobody'>
                    <HomeComponent />
                </div>
                <Footer />
            </div>
        }
    </>);
}

export default App;