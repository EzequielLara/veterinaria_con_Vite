
const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
const {nombre, propietario, email, fecha, sintomas, id} = paciente;

const eliminando = () =>{

  const respuesta = confirm('Deseas eliminar el paciente: ' +  nombre);

  if(respuesta){
    eliminarPaciente(id);
  }
}
  
  return (
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}<span className="font-normal normal-case">{nombre}</span> </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}<span className="font-normal normal-case">{propietario}</span> </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}<span className="font-normal normal-case">{email}</span> </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}<span className="font-normal normal-case">{fecha}</span> </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}<span className="font-normal normal-case">{sintomas}</span> </p>
      
        <div className="flex justify-between mt-8">
          <button 
              type="button"
              className="py-2 px-5 bg-indigo-500 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
              onClick={() => {setPaciente(paciente)}}

          >Editar</button>
          <button 
              type="button"
              className="py-2 px-5 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
              onClick = {eliminando}
          >Eliminar</button>
        </div>
      </div> 
    );
};

export default Pacientes;