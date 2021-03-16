import AboutMe from "./components/AboutMe/AboutMe";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <div className="flex flex-col h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-green-800">
        <Header />
        <Description />
      </div>
      <AboutMe />
      {/* About */}
      {/* Skills */}
      {/* Projects */}
      {/* Footer */}
    </div>
  );
}

export default App;
