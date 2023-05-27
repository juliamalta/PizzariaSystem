

const Header = ({user}) => {

return <div className="flex flex-row border-solid border-2 border-gray-200 h-20 justify-between bg-gray-300 ">

    <div className="flex flex-row">
    
    <h1 className="font-bold text-2xl uppercase p-3 mt-2">Pizzaria</h1>
    <h1 className="font-bold text-2xl uppercase text-red-500 p-3 -ml-4 mt-2 ">Malta</h1>
    <span className="font-bold text-2xl uppercase text-red-500 p-3 -ml-4 mt-2 "> Bem Vindo, {user?.name } {user?.email}</span>
    </div>
    <div className="text-lg font-bold mr-20 p-3 mt-2 text-red-500 uppercase ">
    <a href="" className="mr-5">Pedidos</a>
    <a href="" className="mr-5">Acompanhar Entrega</a>
    <a href="" className="mr-5">Logout</a>

   
</div>
  
</div>

}

export default Header