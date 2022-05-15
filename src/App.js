import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
