import { useModal } from "../../hooks/useModal"
import Colaborador from "../colaborador/Colaborador"
import ListadoCotizaciones from "../listadoCotizaciones/ListadoCotizaciones"

export default function UsuariosAgencia({agencia}) {
  const  { abrirModal } = useModal()

  const handleClickNuevoUsuarioModal = () =>  abrirModal('ADD-USUARIO-AGENCY', 'Agregar usuario a la agencia');
  const handleClickEliminarUsuarioModal = () => abrirModal('DELETE-USUARIO-AGENCY', 'Estás seguro de querer eliminar este colaborador?');
  
  return (
    <div>
      <div className="flex justify-between border-b-2">
        <h3 className="font-bold text-lg text-gray-700 ">Usuarios de la agencia</h3>
        <button
          className="hover:text-sky-800 text-2xl"
          onClick={handleClickNuevoUsuarioModal}
        >
          +
        </button>
      </div>
      {
        !Boolean(agencia.colaboradores.length) ? 
        'No hay usuarios registrados' 
        : <ListadoCotizaciones>
          {
            agencia.colaboradores.map((colaborador, ind) => (
              <Colaborador key={colaborador._id} colaborador={colaborador} ind={ind} modalEliminarColaborador={handleClickEliminarUsuarioModal} />
            ))
          }
        </ListadoCotizaciones> 
      }
    </div>
  )
}
