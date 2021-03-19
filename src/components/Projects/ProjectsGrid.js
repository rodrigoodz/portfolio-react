import React from "react";
import TwoColGridResponsive from "../TwoColGridResponsive";
import Project from "./Project";
import iol_project from "../../assets/proyecto_react_native_iol.png";
import argstockbot_project from "../../assets/proyecto_argstockbot.png";
import planestudio_project from "../../assets/proyecto_plan_estudio_fich.png";
import webofcamrecorder_project from "../../assets/proyecto_web_of_cam.png";
import portfolio_project from "../../assets/proyecto_portfolio.png";

const ProjectsGrid = () => {
  return (
    <TwoColGridResponsive>
      <Project
        name="IOL App"
        link="https://github.com/rodrigoodz/react-native-iol"
        img={iol_project}
        text={
          <>
            <p className="text-white md:text-xl text-sm pl-3 pt-2">
              Aplicacion movil construida usando React Native para consumir los
              servicios de InvertirOnline.com
            </p>
            <p className="text-white md:text-xl text-sm pl-3 pt-2 md:block hidden">
              Esta aplicacion permite:
              <br />
              - Comprar/Vender activos.
              <br />
              - Obtener paneles de cotizaciones
              <br />
              - Obtener cotización por Título
              <br />
              - Obtener estado de cuenta
              <br />
              - Obtener portafolio
              <br />
              - Obtener detalle de operaciones
              <br />
              - Enviar pedidos de cancelación
              <br />
            </p>
          </>
        }
        technologies={["Expo", "React Native Elements", "React Navigation"]}
      />
      <Project
        name="Portfolio v1"
        link="https://github.com/rodrigoodz/portfolio-react"
        img={portfolio_project}
        text={
          <>
            <p className="text-white md:text-xl text-sm pl-3 pt-2">
              Portfolio personal desarrollado desde cero utilizando React. Para
              el estilo utilicé Tailwind, tecnologia que en los ultimos años
              está en auge y me permitió un desarrollo bastante agil respecto a
              los estilos.
            </p>
          </>
        }
        technologies={["ReactJS", "Tailwind"]}
      />
      <Project
        name="Plan de Estudio Interactivo"
        link="https://github.com/rodrigoodz/plan_estudio_fich"
        img={planestudio_project}
        text={
          <>
            <p className="text-white md:text-xl text-sm pl-3 pt-2">
              Plan de estudio interactivo de las carreras de la UNL-FICH
              realizado en VanillaJS con el objetivo de ver de forma clara el
              avance en la carrera y las diferentes correlatividades entre
              materias para tener una mejor planificación.
            </p>
          </>
        }
        technologies={["Vanilla JS", "Bootstrap"]}
      />
      <Project
        name="ArgStockBOT"
        link="https://github.com/rodrigoodz/ArgStockBOT"
        img={argstockbot_project}
        text={
          <>
            <p className="text-white md:text-xl text-sm pl-3 pt-2">
              Bot para Telegram desarrollado con NodeJS y con el fin de realizar
              ciertas tareas relacionadas a la bolsa de valores argentina y
              estadounidense
            </p>
            <p className="text-white md:text-xl text-sm pl-3 pt-2 md:block hidden">
              Entre los comandos se encuentran:
              <br />
              - /ticker ... -&gt; consultar un ticker particular
              <br />
              - /forex ... -&gt; obtener cotización entre pares de divisas
              <br />
              - /graf .... -&gt; obtener gráfico diario de una empresa
              <br />
              - /opciones ... -&gt; ver opciones disponibles y sus cotizaciones
              <br />
              - /dolar -&gt; cotización actual del dolar
              <br />
              - /btc -&gt; cotizacion actual del Bitcoin en USD
              <br />
            </p>
          </>
        }
        technologies={["NodeJS", "Express", "Firebase"]}
      />
      <Project
        name="Web Of Cam Recorder"
        link="https://github.com/rodrigoodz/web-of-cam-recorder"
        img={webofcamrecorder_project}
        text={
          <>
            <p className="text-white md:text-xl text-sm pl-3 pt-2">
              Desarrollo en NodeJS para utilizar un iPhone 4 como cámara de
              seguridad de forma local con más funcionalidades de las
              permitidas.
            </p>
          </>
        }
        technologies={["NodeJS", "Express"]}
      />
    </TwoColGridResponsive>
  );
};

export default ProjectsGrid;
