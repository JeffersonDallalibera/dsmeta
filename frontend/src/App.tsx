import MasterHeader from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <MasterHeader/>
      <main>
        <section id="sales">
            <div className="ds-meta-container">
              <SalesCard/>
              </div>
            </section>
          </main>
    </>
  );
}

export default App;
