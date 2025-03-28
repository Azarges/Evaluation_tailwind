import "./App.css";
import Footer from "./components/Footer";
import ListAvis from "./components/ListAvis";
import Logements from "./components/Logements";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex-col ">
      <Header />
      <div className="grow">
        <Logements />
        <ListAvis />
      </div>
      <Footer />
    </div>
  );
}

export default App;
