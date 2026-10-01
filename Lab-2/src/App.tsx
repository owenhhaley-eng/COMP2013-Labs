import "./App.css";
import ListingContainer from "./components/ListingContainer";
import listings from "./data/data";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <ListingContainer data={listings} />
    </>
  );
}

export default App;
