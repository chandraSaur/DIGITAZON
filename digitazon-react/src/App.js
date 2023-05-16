// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Outlet, Link } from "react-router-dom"
import { Fetch } from './components/Fetch'
import { Hooks } from './components/Hooks'
import { Hooks2 } from './components/HooksCopy'
import { RedInput } from './components/RedInput'
import { PingPong } from './components/PingPong'
import { ToDo } from './components/ToDo'
import { ExcelCopy } from './components/ExcelCopy'
import { Excel } from './components/Excel'
import { CheckboxToDo } from './components/CheckboxToDo'
import { CrazyButton } from './components/CrazyButton'
import { AbstractFetch } from './components/AbstractFetch'
import { MultipleAsync } from './components/MultipleAsync'



function Main() {
  return (
    <>
      <header className="App-header">
        Esercizi React
      </header>
      <div className="sidebar">
        <nav>
          <ul>
            <li><Link to="/abstractfetch">AbstractFetch</Link></li>
            <li><Link to="/checkboxtodo">CheckboxToDo</Link></li>
            <li><Link to="/todo">ToDo</Link></li>
            <li><Link to="/crazybutton">CrazyButton</Link></li>
            <li><Link to="/excel">Excel</Link></li>
            <li><Link to="/excelcopy">ExcelCopy</Link></li>
            <li><Link to="/fetch">Fetch</Link></li>
            <li><Link to="/hooks">Hooks</Link></li>
            <li><Link to="/hookscopy">HooksCopy</Link></li>
            <li><Link to="/multipleasync">MultipleAsync</Link></li>
            <li><Link to="/pingpong">PingPong</Link></li>
            <li><Link to="/redinput">RedInput</Link></li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="abstractfetch" element={<AbstractFetch />} />
          <Route path="checkboxtodo" element={<CheckboxToDo />} />
          <Route path="todo" element={<ToDo />} />
          <Route path="crazybutton" element={<CrazyButton />} />
          <Route path="excel" element={<Excel />} />
          <Route path="excelcopy" element={<ExcelCopy />} />
          <Route path="fetch" element={<Fetch/>} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="hookscopy" element={<Hooks2 />} />
          <Route path="multipleasync" element={<MultipleAsync/>} />
          <Route path="pingpong" element={<PingPong />} />
          <Route path="redinput" element={<RedInput/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
