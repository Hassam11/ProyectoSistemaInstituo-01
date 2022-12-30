import React from "react";
import { Link } from "react-router-dom";

const GestionarContratosTrabajadores = () => {
  function addContratos() {
    alert("agregar Contratos")
  }

  function editarContratos() {
    alert("Editar Contratos")
  }
  return (
    <div>
      <h2 className="text-center bg-blue-500 text-white text-3xl px-10 py-3 ">
        Gestionar Contratos de Trabajadores
      </h2>
      <div className="m-5">
        <Link
          type="button"
          class="text-gray-900 bg-gray-100  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
          to="/GestionarTrabajadores"
        >
          Volver
        </Link>
      </div>
      

      <div className="container mx-auto sm:px-8">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-2xl leading-tight">Trabajadores</h2>
            <div className="text-end flex flex-row gap-4">
              <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Filter'
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Trabajdor"
                  />
                </div>
                <button
                  className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >
                  Filtrar
                </button>
              </form>
              <div className="text-right">
                <button onClick={addContratos} class="group relative h-12 w-12 overflow-hidden rounded-full bg-purple-600 text-lg shadow text-center">
                  <div class="absolute inset-0 w-3 bg-purple-700  transition-all duration-[250ms] ease-out group-hover:w-full text-center"></div>
                  <span class="relative text-white group-hover:text-white text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 container m-auto content-center flex  w-screen justify-center">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow justify-center">
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
                            <button onClick={editarContratos} className="relative block" >
                              <img
                                alt="profil"
                                src="/images/person/8.jpg"
                                className="mx-auto object-cover rounded-full h-10 w-10 "
                              />
                            </button>
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
                        <p className="text-gray-900 whitespace-no-wrap">
                          Trabajador
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Activo
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <button
                          className="text-gray-900 whitespace-no-wrap"
                          
                        >
                          Mirar Contrato
                        </button>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <button
                          onClick={editarContratos}
                          className=" flex-shrink-0 px-7 py-2 text-base font-semibold text-white bg-cyan-600 rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                        >
                          Ediar
                        </button>
                        <button
                          onClick={editarContratos}
                          className=" flex-shrink-0 px-7 py-2 text-base font-semibold text-white bg-cyan-600 rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 m-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionarContratosTrabajadores;
