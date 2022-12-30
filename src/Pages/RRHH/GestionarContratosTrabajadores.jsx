import React from "react";

const GestionarContratosTrabajadores = () => {
  return (
    <div>
      <h2 className="text-center bg-blue-500 text-white text-3xl px-10 py-3 ">
        Gestionar Contratos de Trabajadores
      </h2>
      <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Trabajador
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Edad
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Rol
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Activo
                </th>
                
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Ver Contrato
                </th>
                
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Contratos
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#" className="relative block">
                        <img
                          alt="profil"
                          src="/images/person/8.jpg"
                          className="mx-auto object-cover rounded-full h-10 w-10 "
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Jean marc
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p className="text-gray-900 whitespace-no-wrap">23</p>
                 
                </td>

                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p className="text-gray-900 whitespace-no-wrap">Trabajador</p>
                </td>

                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <p className="text-gray-900 whitespace-no-wrap">Activo</p>
                </td>

                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <a className="text-gray-900 whitespace-no-wrap" href="#">Mirar Contrato</a>
                </td>

                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                  <a
                    href="#"
                    className=" flex-shrink-0 px-7 py-2 text-base font-semibold text-white bg-cyan-600 rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  >
                    Ediar
                  </a>
                  <a
                    href="#"
                    className=" flex-shrink-0 px-7 py-2 text-base font-semibold text-white bg-cyan-600 rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  >
                    Eliminar
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GestionarContratosTrabajadores;
