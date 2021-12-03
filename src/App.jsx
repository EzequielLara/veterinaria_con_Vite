import React from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  
 
  return (
   <div className = "container mx-auto mt-20">
       <Header
          nombre = {'Ezequiel'}
          edad = { 42 }
       />
       <ListadoPacientes/> 
       <Formulario/>
   </div>
  )
}

export default App
