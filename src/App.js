import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        {/* i divided code into two main component sidebar and mainContent */}
        {/* sidebar */}
        <Sidebar />
        {/* maincontent */}
        <MainContent />
      </div>
    </div>
  );
}

export default App;
