import Header from "../../Components/Header/Header";


const Login = () => {

return (
    <>
    <Header/>
   <div className="flex flex-col items-center py-40 bg-[url('/img/malta.jpg')] rounded-none mt-20 border-solid border-2 border-gray-500 bg-no-repeat bg-right  ">
<input className=" p-2 w-96  -ml-5 border-solid border-2 border-gray-200 mt-2" type="text" placeholder="Digite o Email"/>
<input className="p-2  w-96  -ml-5 border-solid border-2 border-gray-200 mt-2"type="password" placeholder="Digite sua senha"/>
<a href="" className="text-dark-200 font-bold uppercase mt-2">Criar Conta?</a>
<button className="bg-green-200 rounded-full p-4 w-40 mt-10">Entrar</button>

   </div>

    </>
)


}
export default Login; 