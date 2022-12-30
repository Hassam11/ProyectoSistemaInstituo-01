import React from 'react'
import { Link } from 'react-router-dom'

const RegistrosEntradaYSalida = () => {
  return (
    <div>
        <h2 className="text-center bg-blue-500 text-white text-3xl px-10 py-3 ">
        Registro de Entrada y Salida del Trabajador
      </h2>
      <div className="mt-5 mx-5">
        <Link
          type="button"
          class="text-gray-900 bg-gray-100  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
          to="/RRHH"
        >
          Volver
        </Link>
      </div>
      <div className="container mx-auto sm:px-8">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 container m-auto content-center flex  w-screen justify-center">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow justify-center">
                <table className="min-w-full leading-normal text-center">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Entrada y Salida
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Lunes 12
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Martes 13
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Miércoles 14
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Jueves 15
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Viernes 16
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-lg font-normal text-left text-gray-800 uppercase bg-gray-300 border-b border-gray-200"
                      >
                        Sábado 17
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Asistencia
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        
                        <p className="text-gray-900 whitespace-no-wrap">
                          
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          x
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          x
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          x
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          x
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Falta
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          x
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Tardanzas
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          x
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                        </p>
                      </td>

                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
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
  )
}

export default RegistrosEntradaYSalida