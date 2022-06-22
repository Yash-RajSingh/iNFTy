import "./App.css";
import "../fonts/fonts.css";
import HomeComponent from "./homeComponent/Home";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailedCollection from "../components/detailedCollection/detailedCollection";
import PreLoader from "../components/loader/loader";

const App = () => {
  return (
    <>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <PreLoader />
                  <Header />
                  <div className="pseudobody">
                    <HomeComponent />
                  </div>
                  <Footer />
                </div>
              }
            />
            <Route
              path="/collection/:name"
              element={
                <div>
                  <PreLoader />
                  <Header />
                  <div className="pseudobody">
                    <DetailedCollection />
                  </div>
                  <Footer />
                </div>
              }
            ></Route>
          </Routes>
        </Router>
    </>
  );
};

export default App;
