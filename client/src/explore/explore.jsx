import { Navbar, Footer, Sender } from "../components";

const send = () => (
  <div className="w-full gradient-bg-welcome">
    <Navbar />
    <div className="text-4xl text-center text-white font-bold mt-10 mb-20">
      <h1> Send Fund Page</h1>
    </div>
    <Sender />
    <Footer />
  </div>
);

export default send;
