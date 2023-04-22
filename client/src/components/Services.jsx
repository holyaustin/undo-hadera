/* eslint-disable max-len */
import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import logo1 from "../assets/recycling.jpg";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl text-justify">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-xl">{title}</h3>
      <p className="text-justify mt-1 text-white text-sm md:w-11/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center bg-gradient-to-b from-green-700 to-black">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start mx-1 sm:mx-10">
        <h1 className="text-white text-3xl sm:text-5xl py-2 ">
          Areas of Interest to our Community to Save Our Planet
          <br /> <br />
        </h1>
        <p className="text-left my-2 text-white font-light md:w-11/12 w-11/12 text-2xl text-justify">



        </p>
        <br />
        <p className="text-left my-2 text-white font-light md:w-11/12 w-11/12 text-2xl text-justify">
        To ensure climate sustainability, we need to reduce deforestation by implementing sustainable forest management practices. This involves promoting the use of alternative sources of energy, such as solar and wind power, and reducing the demand for products that are made from deforested areas.
        </p>
        <br />
        <p className="text-left my-2 text-white font-light md:w-11/12 w-11/12 text-2xl text-justify">
Additionally, reforestation efforts should be undertaken to restore damaged forests and increase carbon sequestration. Forest conservation and restoration can also help to maintain biodiversity, prevent soil erosion, and protect watersheds, which are all critical for supporting healthy ecosystems and human communities.
        </p>
        <br />
        <div className="md:flex-[0.8] flex-initial justify-left items-center">

          <img src={logo1} alt="welcome" className="w-100 cursor-pointer" />
        </div>

      </div>

      <div className="flex-1 flex flex-col justify-start items-center text-2xl">
        <ServiceCard
          color="bg-[#2952E3]"
          title="1. Clean Portable Water"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Access to clean portable water is essential for human life and can also be a key factor in reducing deforestation. In many areas, deforestation occurs due to the need for firewood to boil water for consumption and cooking. Providing access to clean portable water through alternative means can help reduce the demand for firewood, thereby reducing deforestation."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="2. Renewal Solar Energy "
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Solar energy is a clean and sustainable source of power that does not emit harmful pollutants into the environment. The use of solar panels can help reduce the reliance on fossil fuels, which are a major contributor to climate change and deforestation. Additionally, solar energy can be used to power homes, businesses, and other infrastructure, reducing the need for grid power generated from non-renewable sources."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="3. Reforestaion / Afforestration"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Reforestation involves planting new trees in areas where forests have been destroyed or damaged. This can be done through community-based reforestation programs, agroforestry practices, and other reforestation initiatives. Protecting existing forests is critical for preventing deforestation and promoting forest regeneration. This can be done through legal protections, land-use planning, and sustainable forest management practices."
        />
        <ServiceCard
          color="bg-[#2952E3]"
          title="4. Alternative to Timber or Logging for roofing"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle=" The good news is most metals can be recycled together as recycling plants will sort them for you. Some local businesses can recycle scrap metal for you as well if needed. "
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="5. Sustainable agriculture: "
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Encouraging sustainable farming practices can help reduce the need for new agricultural land, and promote agroforestry practices that integrate trees into agricultural systems."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="6. Corporate responsibility: "
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Companies that rely on forest products can take steps to ensure that their sourcing practices are sustainable and support reforestation efforts. "
        />
        <ServiceCard
          color="bg-[#2952E3]"
          title="7. Education and awareness: "
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Raising awareness about the importance of forests and the impacts of deforestation can help to promote individual and collective action to protect and restore forests. "
        />

      </div>
    </div>
  </div>
);

export default Services;
