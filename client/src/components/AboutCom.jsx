import React from "react";
import logo1 from "../assets/four.jpg";

const AboutCom = () => (
  <div className="flex w-full justify-center items-center ">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">

        <h1 className="text-white text-3xl sm:text-5xl py-2 ">
          About Undo
          <br />
        </h1>

        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl text-justify">
        Deforestation is the permanent removal of trees from a forested area, and it has a significant impact on climate sustainability. Trees absorb carbon dioxide and produce oxygen, making them crucial to regulating the Earth's climate. Deforestation, on the other hand, leads to an increase in carbon dioxide in the atmosphere, which contributes to global warming.
        </p>
        <br />  <br />
        <h1 className="text-white text-3xl sm:text-5xl py-2 ">
          Our Vision

        </h1>
        <br />
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
        To ensure climate sustainability, we need to reduce deforestation by implementing sustainable forest management practices. This involves promoting the use of alternative sources of energy, such as solar and wind power, and reducing the demand for products that are made from deforested areas.
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
        Additionally, reforestation efforts should be undertaken to restore damaged forests and increase carbon sequestration. Forest conservation and restoration can also help to maintain biodiversity, prevent soil erosion, and protect watersheds, which are all critical for supporting healthy ecosystems and human communities.
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Reduce your carbon footprint

        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Improve GIS to help track deforestation activities.
        </p>
      </div>

      <div className="md:flex-[0.95] flex-initial justify-center items-center mt-">
        <img src={logo1} alt="welcome" className="w-350 cursor-pointer " />
      </div>
    </div>
  </div>
);

export default AboutCom;
