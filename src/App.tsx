import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../src/pages/login'
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';

function App() {
  return (
    <div className="App font-avenir">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<SingleUser />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
