import { Navbar, Footer, AboutCom } from "../components";

const about = () => (
  <div className="w-full gradient-bg-welcome">
    <Navbar />
    <div className="text-4xl text-center text-white font-bold  mb-10">
      <h1> About Us Page</h1>
    </div>
    <AboutCom />
    <Footer />
  </div>
);

export default about;
