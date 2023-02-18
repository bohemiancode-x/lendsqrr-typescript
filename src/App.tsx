import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../src/pages/login'
import Users from './pages/Users';

function App() {
  return (
    <div className="App font-avenir">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
