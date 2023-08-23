import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import { Route, Routes } from 'react-router-dom'
import CreateEmployee from './Components/CreateEmployee';
import UpdateEmployee from './Components/UpdateEmployee';
function App() {
  return (
    <div>

      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />}> </Route>
          <Route path="/employees" element={<ListEmployeeComponent />}> </Route>
          <Route path="/addemployee" element={<CreateEmployee />}> </Route>
          <Route path='/update-employee/:id' element={<UpdateEmployee />}></Route>
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
