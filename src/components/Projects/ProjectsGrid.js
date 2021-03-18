import React from "react";
import TwoColGridResponsive from "../TwoColGridResponsive";
import Project from "./Project";
import iol_project from "../../assets/Scene.png";

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
      <Project />
      <Project />
      <Project />
    </TwoColGridResponsive>
  );
};

export default ProjectsGrid;
