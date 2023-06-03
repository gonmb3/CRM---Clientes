import { useLoaderData } from "react-router-dom"
import Client from "../components/Client";
import { getClients } from "../data/clients";


//loader
export function loader(){
  const clients = getClients();
  return clients
}

const Index = () => {

    const clients = useLoaderData();

  return (
    <>
            <h1 className="font-black text-4xl text-gray-700">Clientes</h1>
            <p className="mt-3">Administra tus Clientes</p>

            {clients.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-gray-800 text-white">
                           <tr>
                           <th className="p-2">Clientes</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Acciones</th>
                           </tr>

                           
                        </thead>
                        <tbody className="">
                            {
                                clients.map(client => (
                                    <Client key={client.id} client={client} />
                                ))
                            }
                        </tbody>
                       
                    </table>
            ) : (
               <p className="text-center mt-10">No hay clientes</p> 
            )}
    </>
  )
}

export default Index