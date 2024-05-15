import Header from "../Componentes/header/Header"
import {Outlet} from "react-router-dom"

function App() {

  return (
    <>
    
        <Header/>
        <Outlet/>
    </>
  )
}

export default App
