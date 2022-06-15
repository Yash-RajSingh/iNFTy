import './App.css'
import '../fonts/fonts.css'
import HomeComponent from './homeComponent/Home';
import Header from '../components/header/header'
import Footer from '../components/footer/footer';
const App = () => {
    return (<>
    <Header />
        <div className='pseudobody'>
            <HomeComponent />
        </div>
    <Footer />
    </>);
}

export default App;