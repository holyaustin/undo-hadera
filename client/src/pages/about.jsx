import { Navbar, Footer, AboutCom } from "../components";

const about = () => (
  <div className="bg-gradient-to-b from-green-700 to-black">
    <Navbar />
    <div className="text-4xl text-center text-white font-bold  mb-10" />
    <AboutCom />
    <Footer />
  </div>
);

export default about;
