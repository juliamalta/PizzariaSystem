import Header from "../../Components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Login = ({onSubmit}) => {
    const saveSubmit = event => {

        event.preventDefault()
        event.stopPropagation()
        const name= event.target[0].value
        const senha=event.target[1].value
        onSubmit({name,senha})
        
    }


    
return <form onSubmit={saveSubmit} className="flex flex-col items-center py-40 bg-[url('/img/malta.jpg')] rounded-none mt-20 border-solid border-2 border-gray-500 bg-no-repeat bg-right  ">
<input  required className=" p-2 w-96  -ml-5 border-solid border-2 border-gray-200 mt-2" type="text" placeholder="Digite o Usuario"/>
<input required className="p-2  w-96  -ml-5 border-solid border-2 border-gray-200 mt-2"type="password" placeholder="Digite sua senha"/>

<button type="submit" className="bg-green-200 rounded-full p-4 w-40 mt-10">Entrar</button>
<ToastContainer/>
   </form>

   



}
export default Login; 