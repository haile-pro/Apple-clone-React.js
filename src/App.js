import "./components/css/bootstrap.css"
import "./components/css/styles.css"
import Header from "./components/Header/Header";
import AlertSection from "./components/AlertSection/AlertSection";
import Footer from "./components/Footer/Footer";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourthSection from "./components/FourthSection/FourthSection";
import FifthSection from "./components/FifthSection/FifthSection";
import SixthSection from "./components/SixthSection/SixthSection";
import Youtube from "./components/Youtube/Youtube";



function App() {
  return (
    <>
      <Header/>
      <AlertSection/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Youtube/>
      <Footer/>
    </>
  );
}

export default App;
