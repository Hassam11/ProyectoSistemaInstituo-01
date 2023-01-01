import React from "react";
import image from "../imgs/WalterMitty.jpg";

const InfoCard = () => {
  return (
    <div>
      <img
        src={image}
        alt="asdasd"
        width={300}
        className="rounded-lg mb-2  h-80 "
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
  );
};

export default InfoCard;
