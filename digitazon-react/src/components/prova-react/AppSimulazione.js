import './AppSimulazione.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"

import { PostUno } from './PostUno'
import { PostDue } from './postDue';
import { PostTre } from './postTre';
import { PostQuattro } from './postQuattro';
import { PostCinque } from './postCinque';

function Main() {
    return (
      <>
        <header className="app-header">
          <h1>Il Mio Forum</h1>
        </header>
          <div className="sidebar">
            <nav>
              <ul>
                <li><Link to="/postuno">Post 1</Link></li>
                <li><Link to="/postdue">Post 2</Link></li>
                <li><Link to="/posttre">Post 3</Link></li>
                <li><Link to="/postquattro">Post 4</Link></li>
                <li><Link to="/postcinque">Post 5</Link></li>
              </ul>
            </nav>
            <Outlet />
          </div>
      </>
    )
  }
  
  function AppSimulazione() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/postuno" element={<PostUno />} />
            <Route path="/postdue" element={<PostDue />} />
            <Route path="/posttre" element={<PostTre />} />
            <Route path="/postquattro" element={<PostQuattro />} />
            <Route path="/postcinque" element={<PostCinque />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
  
  export default AppSimulazione;
  