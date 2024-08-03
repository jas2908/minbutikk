

import './App.css'
import Header from "./customer/components/Header/Header.jsx";
import HomePage from "./customer/pages/HomePage/HomePage.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";

function App() {
    return (
        <div className= "">
            <Header/>
            <div>
                <HomePage/>
            </div>
            <Footer/>
        </div>
    )
}

export default App
