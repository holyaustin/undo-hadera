
import { Navbar, Welcome, Footer, Services } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="bg-gradient-to-b from-green-700 to-black">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Footer />
  </div>
);

export default App;
