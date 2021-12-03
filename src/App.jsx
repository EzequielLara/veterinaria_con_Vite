import React from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  
 
  return (
   <>
      <h1>Hola Mundo:</h1>
       <Header
          caca = {'diarrea'}

       />
       <ListadoPacientes/> 
       <Formulario/>
   </>
  )
}

export default App
