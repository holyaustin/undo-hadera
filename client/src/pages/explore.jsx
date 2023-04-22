import { Navbar, Footer, Sender } from "../components";

const explore = () => (
  <div className="bg-gradient-to-b from-green-700 to-black">
    <Navbar />
    <div className="text-4xl text-center text-white font-bold mt-10 mb-20">
      <h1> Community Project Marketplace </h1>
    </div>
    <Sender />
    <Footer />
  </div>
);

export default explore;
