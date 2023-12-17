
import 'bootstrap/dist/css/bootstrap.min.css';
import Run from './Signupin/mainpage';
import Exp from './afterlogin/patirel/patmain';
import Exp1 from './afterlogin/adminrel/designdb';
import Exp2 from './afterlogin/adminrel/consult';
import Exp3 from './afterlogin/adminrel/support';
import Exp4 from './afterlogin/patirel/one';
import PostRequest from './afterlogin/adminrel/one';
import Docc from './afterlogin/docrel/one';
import {Routes,Route} from 'react-router-dom';
import Done from "./appointment/appointment";
import Pafp from "./appointment/pendingforpat";
import Pafc from "./appointment/confirmforpat";
import Pafi from "./appointment/in_process";
import Dpend from "./appointment/pendingfordoc";
import Dpendc from "./appointment/confirmfordoc";
import Adminall from "./appointment/pendingforadmin";
import Adminlogs from "./appointment/allforadmin";
import Firebase from "./Firebase/firebaseFront";
import * as React from 'react';




function App() {
 

  return (

    <div>
    <Routes>
      <Route index element={<Run/>} />
      <Route path="/patmain" element={<Exp/>} />
      <Route path="/adco" element={<PostRequest/>} />
      <Route path="/adco1" element={<Exp1/>} />
      <Route path="/adco2" element={<Exp2/>} />
      <Route path="/adco3" element={<Exp3/>} />
      <Route path="/adco4" element={<Exp4/>} />
      <Route path="/docc1" element={<Docc/>} />
      <Route path="/appoint" element={<Done/>} />
      <Route path="/pendforpat" element={<Pafp/>} />
      <Route path="/confirmpat" element={<Pafc/>} />
      <Route path="/inproces" element={<Pafi/>} />
      <Route path="/dpend" element={<Dpend/>} />
      <Route path="/dpend" element={<Dpendc/>} />
      <Route path="/adminall" element={<Adminall/>} />
      <Route path="/adminlogs" element={<Adminlogs/>} />
      <Route path="/fb" element={<Firebase/>} />
    </Routes>
    </div>
 

  );
}

export default App;
