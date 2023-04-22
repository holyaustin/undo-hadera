import { Navbar, Footer, Invest } from "../components";

const investments = () => (
  <div className="w-full gradient-bg-welcome">
    <Navbar />
    <div className="text-4xl text-center text-white font-bold mb-10">
      <h1> Investments Page</h1>
    </div>
    <Invest />
    <Footer />
  </div>
);

export default investments;
