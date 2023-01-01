import React from "react";
import contrato from "../../imgs/contratoEjemplo.jpg";
import { Link } from "react-router-dom";

const ContratoTrabajador = () => {
  function descarga() {
    alert("Descargando Contrato");
  }
  return (
    <div>
      <h2 className="text-center bg-blue-500 text-white text-3xl px-10 py-3 ">
        Contrato del Trabajador
      </h2>
      <div className="container p-2 m-auto ">
        <div className="flex flex-col">
          <div className="m-5 ">
            <Link
              type="button"
              className="text-gray-900 bg-gray-100  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2 "
              to="/Trabajador"
            >
              Volver
            </Link>
            <button
              class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex object-left text-left float-right "
              onClick={descarga}
            >
              <svg
                class="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>
        <div className="items-center m-auto flex flex-col content-center object-center w-2/3 ">
          <h3>
            Contrato de{" "}
            <span className="text-lg font-medium">""Hassam Chinga""</span>
          </h3>
          <div className="m-4">
          <h4 className="">
            Conste por el presente documento al cual las partes otorgan valor,
            que suscriben de una parte Sr. ____{" "}
            <span className="text-lg font-medium">""Hassam Chinga""</span>_____
            , identificado con DNI Nº ____
            <span className="text-lg font-medium">""92488919""</span>_____ , con
            domicilio ____
            <span className="text-lg font-medium">""92488919""</span>_____ .
          </h4>
          <h4 className="">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </h4>  
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContratoTrabajador;
