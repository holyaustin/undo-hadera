
import { Navbar, Welcome, Footer, Services } from "./components";
//import AppRouter from './AppRouter';
import { GlobalAppContextProvider } from './contexts/GlobalAppContext';

const App = () => (
  
  <div className="min-h-screen">
    <GlobalAppContextProvider>
    <div className="bg-gradient-to-b from-green-700 to-black">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Footer />
    </GlobalAppContextProvider>
  </div>
  
);

export default App;
