import NavBar from "./components/NavBar";
import BreadCrumb from "./components/BreadCrumb";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <NavBar />
      </div>
      <div className="flex justify-center items-center">
      <BreadCrumb/>
      </div>
      <div className="flex justify-center items-center">
      <Hero/>
      </div>
      <div className="flex justify-center items-center">
      <FAQ/>
      </div>
    </>
  );
}

export default App;
