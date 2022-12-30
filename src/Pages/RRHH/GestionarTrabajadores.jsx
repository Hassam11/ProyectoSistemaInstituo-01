import React from "react";
import { Link } from "react-router-dom";

const LinksTrabajadores = [
  {
    id: 1,
    to: "/GestionarContratosTrabajadores",
    nombreUrls: "Gestionar Contratos",
  },
  {
    id: 2,
    to: "/GestionarHorariosTrabajadores",
    nombreUrls: "Gestionar Horarios",
  },
  {
    id: 3,
    to: "/GestionarAsistenciaTrabajadores",
    nombreUrls: "Gestionar Asistencia",
  },
  {
    id: 4,
    to: "/GestionarBoletaPagoTrabajadores",
    nombreUrls: "Gestionar Boleta de Pago",
  },
];

const GestionarTrabajadores = () => {
  return (
    <div>
      <h2 className="text-center bg-blue-500 text-white text-3xl px-10 py-3  h-screen ">
        Gestionar Trabajadores
      </h2>
      <div className="bg-white  col-span-2 grid grid-cols-2 rounded-lg shadow-2xl  gap-28 items-center text-center place-items-center w-full  h-screen">
        {LinksTrabajadores.map((item, index) => {
          return (
            <Link
            key={item.id}
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
  );
};

export default GestionarTrabajadores;
