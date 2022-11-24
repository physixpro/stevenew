// import "./App.css";
import NavBar from "./components/NavBar";
import Bio from "./routes/Bio";
import Musicbox from "./video-components/Musicbox";
import Bitchen from "./video-components/Bitchen";
import { Routes, Route } from "react-router-dom";
import Funkandwar from "./video-components/Funkandwar";
import Rollinglikethunder from "./video-components/Rollinglikethunder";
import Broken from "./video-components/Broken";
import Invisiblekillers from "./video-components/Invisiblekillers";
import Theviceguide from "./video-components/Theviceguide";
import Heather from "./video-components/Heather";
import Influenza from "./video-components/Influenza";
import Fatalencounters from "./video-components/Fatalencounters";
import Eugene from "./video-components/Eugene";
import Drsexoneration from "./video-components/Drsexoneration";
import Insideman from "./video-components/Insideman";
import Deadlydressers from "./video-components/Deadlydressers";
import Smallpox from "./video-components/Smallpox";
import Newyork from "./video-components/Newyork";
import Drivethrustreak from "./video-components/Drivethrustreak";
import Carvalhosjourney from "./video-components/Carvalhosjourney";
import Thebottle from "./video-components/Thebottle";
import Brokenplastics from "./video-components/Brokenplastics";
import Kayakfishing from "./video-components/Kayakfishing";
import Msnbc from "./video-components/Msnbc";
// import Brokenfurniture from "./video-components/Brokenfurniture";
import Press from "./routes/Press";
// import Steve from "./routes/Steve";
import Cv from "./routes/Cv";
import Contact from "./routes/Contact";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<NavBar />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="/press" element={<Press />} />
      <Route path="/musicbox" element={<Musicbox />} />
      <Route path="/bitchen" element={<Bitchen />} />
      <Route path="/funkandwar" element={<Funkandwar />} />
      <Route path="/rollinglikethunder" element={<Rollinglikethunder />} />
      <Route path="/broken" element={<Broken />} />
      <Route path="/invisiblekillers" element={<Invisiblekillers />} />
      <Route path="/heather" element={<Heather />} />
      <Route path="/kayakfishing" element={<Kayakfishing />} />
      <Route path="/theviceguide" element={<Theviceguide />} />
      <Route path="/fatalencounters" element={<Fatalencounters />} />
      <Route path="/influenza" element={<Influenza />} />
      <Route path="/smallpox" element={<Smallpox />} />
      <Route path="/insideman" element={<Insideman />} />
      <Route path="/drivethrustreak" element={<Drivethrustreak />} />
      <Route path="/deadlydressers" element={<Deadlydressers />} />
      <Route path="/exoneration" element={<Drsexoneration />} />
      <Route path="/plastics" element={<Brokenplastics />} />
      <Route path="/carvalhos" element={<Carvalhosjourney />} />
      <Route path="/eugeneoneil" element={<Eugene />} />
      <Route path="/newyork" element={<Newyork />} />
      <Route path="/thebottle" element={<Thebottle />} />
      <Route path="/msnbc" element={<Msnbc />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/contact" element={<Contact />} />

      {/* <Route path="/brokenfurniture" element={<Brokenfurniture />} /> */}
    </Routes>
  );
}

export default App;
