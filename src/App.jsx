import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RRHH from "./Pages/RRHH";
import GestionarTrabajadores from "./Pages/RRHH/gestionarTrabajadores";
import GestionarHorariosTrabajadores from "./Pages/RRHH/GestionarHorariosTrabajadores";
import GestionarContratosTrabajadores from "./Pages/RRHH/GestionarContratosTrabajadores";
import GestionarAsistenciaTrabajadores from "./Pages/RRHH/GestionarAsistenciaTrabajadores";
import GestionarBoletaPagoTrabajadores from "./Pages/RRHH/GestionarBoletaPagoTrabajadores";
import HorarioRRHH from "./Pages/HorarioRRHH";
import Trabajador from "./Pages/Trabajador";
import ContratoTrabajador from "./Pages/Trabajador/ContratoTrabajador";
import HorarioTrabajador from "./Pages/Trabajador/HorarioTrabajador";
import BoletaDePago from "./Pages/Trabajador/BoletaDePago";
import RegistrosEntradaYSalida from "./Pages/Trabajador/RegistrosEntradaYSalida";
import BoletadePagoRRHH from "./Pages/RRHH/BoletadePagoRRHH";
import NuevoContrato from "./Pages/RRHH/NuevoContrato";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/RRHH" element={<RRHH />} />
          <Route path="/GestionarTrabajadores" element={<GestionarTrabajadores />} />
          <Route path="/GestionarHorariosTrabajadores" element={<GestionarHorariosTrabajadores />} />
          <Route path="/GestionarContratosTrabajadores" element={<GestionarContratosTrabajadores/>} />
          <Route path="/GestionarAsistenciaTrabajadores" element={<GestionarAsistenciaTrabajadores/>} />
          <Route path="/GestionarBoletaPagoTrabajadores" element={<GestionarBoletaPagoTrabajadores/>} />
          <Route path="/HorarioRRHH" element={<HorarioRRHH/>} />

          <Route path="/Trabajador" element={<Trabajador />} />
          <Route path="/BoletadePagoRRHH" element={<BoletadePagoRRHH />} />
          <Route path="/ContratoTrabajador" element={<ContratoTrabajador />} />
          <Route path="/HorarioTrabajador" element={<HorarioTrabajador />} />
          <Route path="/BoletasdePago" element={<BoletaDePago/>} />
          <Route path="/RegistrosEntradaYSalida" element={<RegistrosEntradaYSalida/>} />
          <Route path="/NuevoContrato" element={<NuevoContrato/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
