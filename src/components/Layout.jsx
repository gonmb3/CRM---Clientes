import { Link, Outlet, useLocation } from "react-router-dom"

const Layout = () => {

    const location = useLocation();

  return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-gradient-to-r from-gray-500 to-slate-600 px-5 py-10 ">
                {/* sidebar title */}
                    <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
                    
                    {/* sidebar nav */}
                    <nav className="mt-10 text-white">
                            <Link className={ `${location.pathname === "/" ? "text-black " : "text-white"} text-2xl block mt-2 hover:text-gray-800`} to="/">
                                Clientes
                            </Link>
                            <Link className={ `${location.pathname === "/clientes/nuevo" ? "text-black" : "text-white"} text-2xl block mt-2 hover:text-gray-800`} to="/clientes/nuevo">
                               Nuevo Cliente
                            </Link>
                    </nav>
            </aside>
            {/*main / outlet */}
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll bg-gray-100">
                <Outlet/>
            </main>
        </div>
  )
}

export default Layout