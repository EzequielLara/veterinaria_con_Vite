import React from 'react';

const Formulario = () => {
    return (
        <div className ="md:w-1/2 lg:w-2/5" >
           <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
           <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {' '}<span className="text-indigo-600 font-bold">Administralos</span></p>           
           <form className="bg-white shadow-md rounded-lg py-10 px-5">
               <div className="mb-5">
                   <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre de la Mascota:</label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md"
                    ></input>
               </div>
               <div className="mb-5">
                   <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario:</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md"
                    ></input>
               </div>
               <div className="mb-5">
                   <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email del Propietario:</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400
                         rounded-md"
                    ></input>
               </div>
           </form>
        </div>
    );
};

export default Formulario;