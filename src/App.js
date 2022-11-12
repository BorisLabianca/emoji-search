import "./App.css";
import { useState } from "react";
import data from "./data.json";
import Line from "./components/Line";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");
  const tab = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].keywords.indexOf(search) !== -1) {
      if (tab.length < 20) {
        tab.push(
          <Line key={i} title={data[i].title} symbol={data[i].symbol} />
        );
      } else {
        break;
      }
    }
  }
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      {tab}
      <Footer
        tech={"React"}
        techSite={"https://reactjs.org/"}
        place={"Le Reacteur"}
        placeSite={"https://www.lereacteur.io/"}
        author={"Boris"}
        linkedin={"https://www.linkedin.com/in/boris-labianca-01a52871/"}
      />
    </div>
  );
}

export default App;
