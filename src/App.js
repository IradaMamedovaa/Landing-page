import './assets/style/style.scss'
import Header from "./components/Header/Header";
import SliderSection from './components/SliderSection/SliderSection';
import Footer from './components/Footer/Footer';
import Support from './components/Support/Support';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <SliderSection/>
      <Support/>
      <About/>
      <Footer/>
    </div>
  );
}


export default App;
