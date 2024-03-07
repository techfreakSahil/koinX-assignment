import AboutBitcoin from "./components/AboutBitcoin";
import Hero from "./components/Hero";
import Insight from "./components/Insight";
import KoinX from "./components/KoinX";
import Navbar from "./components/Navbar";
import OthersCoin from "./components/OthersCoin";
import Sentiments from "./components/Sentiments";
import Team from "./components/Team";
import Tokenomics from "./components/Tokenomics";
import Trending from "./components/Trending";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-gray-200">
      <Navbar />
      <div className="grid sm:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Hero />
          <Insight />
          <Sentiments />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
        </div>
        <div className="lg:col-span-1">
          <KoinX />
          <Trending />
        </div>
        <div className="lg:col-span-3">
          <OthersCoin />
        </div>
      </div>
    </div>
  );
};

export default App;
