   

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {


  function handleEliminar(){
    const respuesta=confirm('deseas eliminar este paciente')
    if(respuesta){eliminarPaciente(id)}
  }

  const {nombre,propietario,email,fecha,sintomas,id}=paciente
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:{''}
  <span className='font-normal normal-case'>{nombre}</span>

    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{''}
  <span className='font-normal normal-case'>{propietario}</span>

    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Correo:{''}
  <span className='font-normal normal-case'>{email}</span>

    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:{''}
  <span className='font-normal normal-case'>{fecha}</span>

    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{''}
  <span className='font-normal normal-case'>{sintomas}</span>

    </p>
    <div className='flex justify-between mt-10'>
      <button 
      type="button"
      className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
      onClick={()=>setPaciente(paciente)}
      >editar</button>
      <button 
      type="button"
      className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
      onClick={handleEliminar}
      
      >eliminar</button>
    </div>
  </div>
  )
}

export default Paciente