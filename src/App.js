import {BrowserRouter, Router, Routes, Route, Switch} from 'react-router-dom';
import styled from "styled-components";
import Login from './pages/Login';
import Main from './main/Main.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
