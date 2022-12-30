import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RRHH from "./Pages/RRHH";
import GestionarTrabajadores from "./Pages/RRHH/gestionarTrabajadores";
import GestionarHorariosTrabajadores from "./Pages/RRHH/GestionarHorariosTrabajadores";
import GestionarContratosTrabajadores from "./Pages/RRHH/GestionarContratosTrabajadores";
import GestionarAsistenciaTrabajadores from "./Pages/RRHH/GestionarAsistenciaTrabajadores";
import GestionarBoletaPagoTrabajadores from "./Pages/RRHH/GestionarBoletaPagoTrabajadores";

function App() {
  //Trabajador
  //<Route path="/Trabajador" element={<Trabajador />} />
  //<Route path="/contratoTrabajador" element={<ContratoTrabajador />} />
  //<Route path="/horarioTrabajador" element={<HorarioTrabajador />} />
  //RRHH
  //  <Route path="/gestionarContratos" element={<GestionarContratos/>} />
  //<Route path="/gestionarHorarios" element={<GestionarHorarios/>} />
  //<Route path="/gestionaraBoletasDePago" element={<GestionarBoletas/>} />
  //<Route path="/GestionarAsistencia" element={<GestiionarAsistencia/>} />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
