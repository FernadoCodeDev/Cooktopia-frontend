import React from "react";
import CustomerServiceSVG from "../../assets/svg/CustomerServiceSVG";
import PremiumSVG from "../../assets/svg/PremiumSVG";
import IdeaSVG from "../../assets/svg/IdeaSVG";

const Info = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-4 p-4 bg-beige-200 text-beige-950 dark:text-beige-200 dark:bg-neutral-900 min-h-auto ">
      <h1 className="font-mono text-2xl font-bold text-center md:text-2xl">
        ¿POR QUÉ ELEGIR NUESTROS UTENSILIOS?
      </h1>

      <div className="h-auto m-auto grid grid-cols-1 md:grid-cols-3 gap-2 max-w-[80rem]">
        <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-beige-950 dark:border-beige-300">
          <div className="flex items-center justify-center w-20 h-20 p-2 rounded-full bg-beige-300">
            <CustomerServiceSVG width="60" height="auto" />
          </div>

          <h1 className="font-mono text-2xl font-bold text-center text-beige-950 dark:text-beige-200">
            SERVICIO AL CLIENTE EXCEPCIONAL
          </h1>
          <p className="text-center ">
            Estamos contigo en cada paso del camino, ofreciendo apoyo antes,
            durante y después de completar tu proyecto.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-beige-950 dark:border-beige-300">
          <div className="flex items-center justify-center w-20 h-20 p-2 rounded-full bg-beige-300">
            <PremiumSVG width="60" height="auto" />
          </div>

          <h1 className="font-mono text-2xl font-bold text-center text-beige-950 dark:text-beige-200">
            MATERIALES DE CALIDAD PREMIUM
          </h1>
          <p className="text-center ">
            Utilizamos únicamente materiales de primera calidad para garantizar
            durabilidad, funcionalidad y belleza que duren toda la vida.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-beige-950 dark:border-beige-300">
          <div className="flex items-center justify-center w-20 h-20 p-2 m-auto rounded-full bg-beige-300">
            <IdeaSVG width="50" height="auto" />
          </div>

          <h1 className="font-mono text-2xl font-bold text-center text-beige-950 dark:text-beige-200">
            SOLUCIONES DE DISEÑO PERSONALIZADAS
          </h1>
          <p className="text-center ">
            Tu cocina, tu estilo. Desde lo moderno hasta lo clásico, hacemos
            realidad tu visión con diseños y acabados personalizados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;