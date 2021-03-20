import React from "react";
import profilePic from "../../assets/profile_pic.jpg";
import ParticlesEffect from "./ParticlesEffect";
import WriteEffect from "./WriteEffect";
import { Slide } from "react-awesome-reveal";

const Description = () => {
  return (
    <div
      className="flex lg:flex-row flex-col h-screen w-screen justify-center items-center  md:p-20 p-4 "
      id="description"
    >
      {/* <ParticlesEffect /> */}
      <Slide direction="left" triggerOnce>
        <div className=" mr-0 lg:mr-4  lg:w-80 md:w-72 max-w-xs w-60 lg:mb-0 mb-5 ">
          <img
            src={profilePic}
            alt="profile_pic"
            className="rounded-full shadow "
          />
        </div>
      </Slide>
      <Slide direction="right" triggerOnce>
        <div className="lg:w-auto w-screen lg:text-left text-center ">
          <h3 className="text-white font-serif">
            Hola <span className="animate-hand">👋</span>, mi nombre es
          </h3>
          <h1 className="text-white lg:text-6xl text-3xl font-black font-serif mb-4 ">
            Rodrigo Ortiz de Zárate
          </h1>
          <WriteEffect />
        </div>
      </Slide>
    </div>
  );
};

export default Description;
