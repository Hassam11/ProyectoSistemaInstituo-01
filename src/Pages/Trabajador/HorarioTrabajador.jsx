import React from "react";
import { Link } from "react-router-dom";

const HorarioTrabajador = () => {
  return (
    <div>
      <h2 className="text-center bg-blue-500 text-white text-3xl px-10 py-3 ">
        Horario Trabajador
      </h2>
      <div className="mt-5 mx-5">
        <Link
          type="button"
          class="text-gray-900 bg-gray-100  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
          to="/Trabajador"
        >
          Volver
        </Link>
      </div>
      <div className="container mx-auto sm:px-8">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 container m-auto content-center flex  w-screen justify-center">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow justify-center">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Horario
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Lunes
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Martes
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Miércoles
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Jueves
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Viernes
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Sábado
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Administrar
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          7:00-12:00
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          7:00-12:00
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          7:00-12:00
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          7:00-12:00
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          7:00-12:00
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          7:00-12:00
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Almuerzo
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:00-12:30
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:00-12:30
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:00-12:30
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:00-12:30
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:00-12:30
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:00-12:30
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Administrar
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:30-18:00
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:30-18:00
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:30-18:00
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:30-18:00
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:30-18:00
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          12:30-18:00
                        </p>
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

export default HorarioTrabajador;
