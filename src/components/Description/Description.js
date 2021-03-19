import React from "react";
import profilePic from "../../assets/profile_pic.jpg";
import ParticlesEffect from "./ParticlesEffect";
import WriteEffect from "./WriteEffect";
import { Slide } from "react-awesome-reveal";

const Description = () => {
  return (
    <div
      className="flex xl:flex-row flex-col flex-1 justify-center items-center  md:container md:mx-auto md:p-20 p-4"
      id="description"
    >
      <ParticlesEffect />
      <Slide direction="left" triggerOnce>
        <div className="md:mb-6 mb-40 md:w-96 md:h-96 h-48 w-48  ">
          <img
            src={profilePic}
            alt="profile_pic"
            className="h-full rounded-full shadow"
          />
        </div>
      </Slide>
      <Slide direction="right" triggerOnce>
        <div className="md:ml-12 lg:w-2/3 ">
          <h3 className="text-white font-serif">
            Hola <span className="animate-hand">👋</span>, mi nombre es
          </h3>
          <h1 className="text-white lg:text-6xl text-3xl font-black font-serif mb-4">
            Rodrigo Ortiz de Zárate
          </h1>
          <WriteEffect />
        </div>
      </Slide>
    </div>
  );
};

export default Description;
