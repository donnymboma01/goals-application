import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Hearder';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Routes>
            <Route  path='/'  element={ <Dashboard/> } />
            <Route  path='/login' element={<Login />} /> 
            <Route  path='/register' element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
