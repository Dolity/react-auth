import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import Home from './pages/Home';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    (
      async () => {
        const res = await fetch('http://localhost:8000/api/v1/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Origin': 'http://localhost:3000',
          },
          credentials: 'include',
        });
        const content = await res.json();

        setName(content.name);
        console.log("Home: " + content.name);
      }
    )();
    // userCallBack();
  },);

  return (
    <>
      <BrowserRouter>
        <Nav name={name} setName={setName} />
        <Routes>
          <Route path="/" Component={() => <Home name={name} />} />
          <Route path="/login" Component={() => <Login setName={setName} />} />
          <Route path="/register" Component={Register} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
