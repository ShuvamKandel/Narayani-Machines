import NavBar from "./Components/Navigation Bar/NavBar";
import ImageSection from "./Components/Image Section/ImageSection";
import Breaker from "./Components/Trending Products/Breaker";
import GridComponent from "./Components/Cool Articles/GridArticles";
import Footer from "./Components/Footer/Footer";
import './app.scss';

function App() {
  return (
    <div>
      <NavBar />
      <ImageSection />
      <GridComponent />
      <Breaker />
      <Footer />
    </div>
  );
}

export default App;
