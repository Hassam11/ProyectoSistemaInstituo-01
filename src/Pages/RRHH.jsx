import { useState } from "react";
import image from "../imgs/perfil_1.png";
import { Link } from "react-router-dom";

const LinksPages = [
  {
    id: 1,
    to: "/gestionarTrabajadores",
    nombreUrls: "Gestionar Trabajadores",
  },
  {
    id: 2,
    to: "/horarioTrabajador",
    nombreUrls: "Horario Trabajador",
  },
  {
    id: 3,
    to: "/boletasdePago",
    nombreUrls: "Boletas de Pago",
  },
  {
    id: 4,
    to: "/registrosEntradaYSalida",
    nombreUrls: "Registros de entrada y salida",
  },
];

const RRHH = () => {
  return (
    <div className="bg-white h-screen">
      <h2 className="text-center bg-blue-500 text-white text-3xl px-10 py-3 ">
        Recursos Humanos
      </h2>
      <div className="container p-4 m-auto ">
        <div className="grid grid-cols-3 col-span-2">
          <div className="bg-white col-span-1 p-5 m-auto rounded-lg shadow-2xl ">
            <img
              src={image}
              alt="asdasd"
              width={300}
              className="rounded-lg mb-2"
            />
            <p className="pt-2 text-lg font-semibold text-center">
              Hassam Alberto Chinga Huamani
            </p>
            <p className="text-base text-gray-600 text-center pb-4">
              correo@gmail.com
            </p>
            <hr className="pt-4 pb-2" />
            <div className="p-3">
              <div>
                <label className="text-lg font-medium text-gray-800 leading-none">
                  ID:{" "}
                </label>
                <p className="text-base text-gray-700">9348539</p>
              </div>
              <div>
                <label>Dirreción: </label>
                <p className="text-base text-gray-700">Los Olivos</p>
              </div>
              <div>
                <label>Area: </label>
                <p className="text-base text-gray-600">Trabajador</p>
              </div>
            </div>
          </div>

          <div className="bg-white  col-span-2 grid grid-cols-3 rounded-lg shadow-2xl  gap-28 items-center text-center place-items-center">
            {LinksPages.map((item, index) => {
              return (
                <Link
                  className="text-center border rounded-lg p-4 hover:shadow-2xl transition-all"
                  to={item.to}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-36 h-36"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                  {item.nombreUrls}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RRHH;
