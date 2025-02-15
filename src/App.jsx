import NavBar from "./Components/NavigationBar/NavBar";
import ImageSection from "./Components/HomePage/Image Section/ImageSection";
import Breaker from "./Components/HomePage/Trending Products/Breaker";
import GridComponent from "./Components/HomePage/Cool Articles/GridArticles"
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
