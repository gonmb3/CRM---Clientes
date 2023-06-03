//react router dom
import { Form, useNavigate , redirect} from "react-router-dom";
//delete client 
import { deleteClient } from "../data/clients";

//action
export async function action({params}){

 await deleteClient(params.clienteID)
  return redirect("/")
}

const Client = ({ client }) => {
  const { nombre, empresa, email, telefono,id  } = client;

  const navigate = useNavigate();

  return (
    <tr className="border-b text-center  mx-auto">
         <td className="p-6 ">
           {/* name  */}
        <p className="text-2xl text-gray-800">{nombre}</p>    
        {empresa}
         </td>
         {/* email & phone  */}
         <td className="p-6 ">
            <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email} </p>    
            <p className="text-gray-600"><spant className="text-gray-800 uppercase font-bold">Telefono: </spant>{telefono} </p>    
        
         </td>

         <td className="p-6 flex gap-3 items-center">
          {/* update client button */}
            <button
            onClick={() => navigate(`/clientes/${id}/editar`)}
            type="button" className="text-blue-600 font-bold hover:text-blue-800 uppercase text-xs">Editar</button>

            <Form
            method="post"
            action={`/clientes/${id}/eliminar`}
            onSubmit={(e) => {
              if(!confirm("Deseas Eliminar Este Registro?")){
                e.preventDefault();
              }
            }}
            >
               {/* delete client button */}
                <button
                type="submit" className="text-red-600 font-bold hover:text-red-700 uppercase text-xs">
                Eliminar
              </button>
            </Form>
            
         </td>
    </tr>
  );
};

export default Client;
