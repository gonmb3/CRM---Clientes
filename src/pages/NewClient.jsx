//react router dom
import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
//components
import ClientsForm from "../components/ClientsForm";
import Error from "../components/Error";

import { addClient } from "../data/clients";



export async function action({ request }) {
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

 await addClient(data)


  return redirect("/")
}

const NewClient = () => {
  //react router dom hook
  const navigate = useNavigate();
  //react router dom hook
  const dataErrors = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-gray-700">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
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
          <ClientsForm />

          {/* submit button */}
          <input
            type="submit"
            value={"registrar cliente"}
            className="mt-5 w-full bg-gray-800 p-3 uppercase font-bold text-white text-lg cursor-pointer"
          />
        </Form>
      </div>
    </>
  );
};

export default NewClient;
