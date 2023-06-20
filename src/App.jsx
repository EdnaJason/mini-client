import './App.css'
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/login'
import Signup from './pages/signup'
import Asha_Home from './pages/Asha/AshaHome';
import AdminHome from './pages/AdminHome';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoutes from './components/ProtectedRoutes';
import PublicRoutes from './components/PublicRoutes';
import Ashalogin from './pages/Asha/Ashalogin';
import Viewasha from './pages/admin/Viewasha';
import Ashadetail from './pages/admin/Ashadetail';
import PatientHome from './pages/Patient/PatientHome';
import Plogin from './pages/Patient/Plogin';
import AshaHome from './pages/Asha/AshaHome';
import Ashaprofile from './pages/Asha/Ashaprofile';
import Addpatient from './pages/admin/Addpatient';
import Viewpatient from './pages/admin/Viewpatient';
import Patientdetail from './pages/admin/Patientdetail';
import StockManagementPage from './pages/admin/Stockmanagemnetpage';

function App() {
  return  <>
  <Router>
   {/* {loading && <Spinner/>} */}
  <Routes> 
   <Route  path='/' element= 
   {<Homepage/>}
   ></Route>
   <Route  path='/login' element= 
     {<Login/>}
   ></Route>
   <Route path='/signup' element= 
     
       {<Signup/>}
     
   ></Route>
   <Route path='/adminhome' element =/*{<ProtectedRoutes>*/
     {<AdminHome/>}/>
  
   <Route path='/ashalogin' element = {<Ashalogin/>}/>
   <Route path='/ashahome' element ={<AshaHome/>}/>
   <Route path='/patienthome' element ={<PatientHome/>}/>
   <Route path='/patientlogin' element ={<Plogin/>}/>
   <Route path='/viewasha' element ={<Viewasha/>}/>
   <Route path='/ashadetail/:name' element ={<Ashadetail/>}/>
   <Route path='/adminprofile/:name' element ={<Plogin/>}/>
   <Route path='/ashaprofile' element ={<Ashaprofile/>}/>
   <Route path='/patientprofile/:name' element ={<Plogin/>}/>
   <Route path='/addpatient' element={<Addpatient/>}/>
   <Route path='/viewpatient' element ={<Viewpatient/>}/>
   <Route path='/patientdetail/:name' element ={<Patientdetail/>}/>
   <Route path='/stockmanagement' element={<StockManagementPage/>}/>
   <Route path='/adminhome' element={<AdminHome/>}/>
   </Routes>
  </Router>
  
  </>

}

export default App
