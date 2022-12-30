import React from "react";
import { useRef } from "react";

const GestionarAsistenciaTrabajadores = () => {
  const ref = useRef([]);

  const checkboxvalue = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h2 className="text-center bg-blue-500 text-white text-3xl px-10 py-3 ">
        Gestionar Asistencia de Trabajadores
      </h2>
      <div className="container max-w-3xl px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-2xl leading-tight">Trabajadores</h2>
            <div className="text-end">
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
            </div>
          </div>


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
                      Asistio
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Atrasado
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Falto
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                    >
                      Justificado
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
                      <input type="checkbox"/>
                    </td>
                   
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <input type="checkbox"/>
                    </td>
                    
                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <input type="checkbox"/>
                    </td>

                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <input type="checkbox"/>
                    </td>

                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionarAsistenciaTrabajadores;
