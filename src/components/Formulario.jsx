import Error from './Error';
import { useState, useEffect } from 'react';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setfecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);
    
    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return fecha + random
    }

    useEffect(() => {
        if(Object.keys(paciente).length > 0){

            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setfecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    const handleSubmit =(e)=>{
        e.preventDefault();

        //validación del formulario:
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true);
            return;
        }
        
        setError(false);
        // Objeto de Paciente
       const objetoPaciente = {
           nombre,
           propietario,
           email,
           fecha,
           sintomas,
           
       };
       if(paciente.id){
            //editando el registro
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState=>
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados);
            setPaciente({});
       }else{
           //nuevo registro
           objetoPaciente.id = generarId();
           setPacientes([...pacientes, objetoPaciente]);
       }
       // Reiniciar el formulario
       setNombre('');
       setPropietario('');
       setEmail('');
       setfecha('');
       setSintomas('');
    }
    

    return (
        <div className ="md:w-1/2 lg:w-2/5" >
           <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
           <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {' '}<span className="text-indigo-600 font-bold">Administralos</span></p>           
           <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
               
               {error && 
                    <Error mensaje='Rellene los campor vacios'/>
                }
               <div className="mb-5">
                   <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de la Mascota:</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md"
                        value = {nombre} 
                        onChange = { (e)=> setNombre(e.target.value) }

                    ></input>
               </div>
               <div className="mb-5">
                   <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario:</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md"
                        value = {propietario}
                        onChange = {(e) => setPropietario(e.target.value)}
                    ></input>
               </div>
               <div className="mb-5">
                   <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email de contacto:</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md"
                         value = {email} 
                        onChange = { (e)=> setEmail(e.target.value) }
                    ></input>
               </div>
               <div className="mb-5">
                   <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta:</label>
                    <input
                        id="alta"
                        type="date"
                        placeholder="Fecha de alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md"
                         value = {fecha} 
                        onChange = { (e)=> setfecha(e.target.value) }
                    ></input>
               </div>
               <div className="mb-5">
                   <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Síntomas:</label>
                    <textarea
                        id="sintomas"
                        placeholder="Describe los síntomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md"
                         value = {sintomas} 
                        onChange = { (e)=> setSintomas(e.target.value) } 
                    />
               </div>
               <input
                   type="submit"
                   className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-shadow"
                   value= {paciente.id ? "Editar Paciente":"Agregar Paciente"}

               />
           </form>
        </div>
    );
};

export default Formulario;