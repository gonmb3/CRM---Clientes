//data clients
import { getClient, updateClient } from "../data/clients"

//components
import ClientsForm from "../components/ClientsForm";
import Error from "../components/Error";

//react router dom
import {Form, useNavigate, useLoaderData, useActionData, redirect} from "react-router-dom"


//loader
export async function loader({params}){

  const client = await getClient(params.clienteID);
  if(Object.values(client).length === 0){
    throw new Response("",{
        status: 404,
        statusText: "Cliente no Encontrado"
    })
  }

    return client
}
//action
export async function action({request, params}){

    console.log(params)
    const formData = await request.formData();

    const data = Object.fromEntries(formData);
  
    const email = formData.get("email");
  
    //validation
    const errors = [];
    if (Object.values(data).includes(""))
      errors.push("Todos los campos son obligatorios");
  
    // email validation
    let regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    if (!regex.test(email)) {
      errors.push("El email no es válido");
    }
  
    //return data if there are errors
    if (Object.keys(errors).length) {
      return errors;
    }

    //update client
    await updateClient(params.clienteID, data)
  

    return redirect("/")
}

const EditClient = () => {
    const navigate = useNavigate();
    const clientData = useLoaderData();
    const dataErrors = useActionData();

  return (
    <>
    <h1 className="font-black text-4xl text-gray-700">Editar Cliente</h1>
    <p className="mt-3">
    A continuación podrás modificar los datos de un cliente
    </p>

    <div className="flex justify-end">
      {/* navigate to index */}
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-800 text-white px-3 py-1 font-bold uppercase"
      >
        Volver
      </button>
    </div>

    <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
      {/* ERROR */}
      {dataErrors?.length &&
        dataErrors.map((error, index) => <Error key={index}>{error} </Error>)} 


      <Form
      noValidate
       method="post">
              {/* clients form component*/}
        <ClientsForm clientData={clientData} />

        {/* submit button */}
        <input
          type="submit"
          value={"guardar cliente"}
          className="mt-5 w-full bg-gray-800 p-3 uppercase font-bold text-white text-lg cursor-pointer"
        />
      </Form>
    </div>
  </>
  )
}

export default EditClient