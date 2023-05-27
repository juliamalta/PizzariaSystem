import { useState } from "react"
import data from "../../../pizza.json"
import {PlusIcon,MinusIcon } from '@heroicons/react/24/solid'


const PizzaList = () => {
    const[selectPizza,setSelectPizza] = useState([]);
  {/* funçao para adicionar a pizza selecionada pelo indice  */}
const handleAddToCart = (index)=>{
    const pizzaAdd = data[index];
    setSelectPizza((prevSelectPizza) =>[...prevSelectPizza,pizzaAdd]);


};
  {/* funçao para remover a pizza selecionada pelo indice  */}
const handleRemoveToCart = (index) => {
    setSelectPizza((prevSelectPizza) => {
      const updatedSelectPizza = [...prevSelectPizza];
      updatedSelectPizza.splice(index, 1);
      return updatedSelectPizza;
    });
  };

  const concluir =(index) =>{
 

    alert("Pedido encaminhado" )

  }



    return <div className="mt-10 ml-10 h-screen flex flex-row   "> 

   {/* Menu. */}
<div className="ml-10">
<h1 className="text-3xl font-bold ">Menu</h1>
<div id="divBusca" className=" flex flex-col-2 p-6 gap-2 " >
    <input  className="p-2  w-96  -ml-5 border-solid border-2 border-gray-200" type="text" id="txtBusca" placeholder="Procura por nome de Pizza"/>
    <button id="btnBusca " className="bg-gray-300 rounded-none w-20 uppercase">Buscar</button>

</div>
<div className="text-2xl ">
        {
          data.map((pizza,index)=>(
<div key={index} className={`p-4 ${index === 0 || index === 4 ? ' w-5/6 border-solid border-2 border-pizzab-100 mt-2 ' : ''}${index === 1 || index === 2  || index === 3  || index === 5? ' w-5/6 border-solid border-2 border-pizzab-200 mt-2'  : ''} `}>
<h2 className="font-bold ">{pizza.title}
<button type="submit" key={index} onClick={() => handleAddToCart(index)}>
  <PlusIcon className="h-8 bg-violet-200 rounded-full" />
</button>
</h2>
<h2>{pizza.desc}</h2>

</div>

          ))

      
        }
      
        </div>
        </div>
      
   {/* Pedidos. Menu */}
<div className=" border-solid border-2 border-gray-300 w-2/5 bg-[url('/img/malta.jpg')]  bg-no-repeat bg-bottom ">

<div>

    <h1 className="text-pizzab-100 font-bold text-3xl ml-3">Pedidos</h1>
    <p className="bg-gray-100 mt-5 ml-4 p-4">Veja aqui as pizza que estão selecionadas para o pedido</p>

</div>

   {/* Pedidos.Selecionados */}
<div className="ml-10">
    {selectPizza.map((pizza,index)=>(
        <div key={index} className=' w-5/6 border-solid border-2 border-gray-200 mt-2 text-lg '>
<h2 className="font-bold ">{pizza.title}
</h2>
<h2>{pizza.desc}</h2>
<button className="rounded-full bg-red-200 p-1 w-7 font-bold uppercase" onClick={() => handleRemoveToCart(index)}>-</button>
</div>



    )
    
    
    
    
    )}    
    
    
    
  </div>

  <div className="flex justify-end  grid-cols-3 gap-4 place-items-end h-56 ">
    <button onClick={concluir} className="bg-green-200 font-bold rounded-full my-10 p-5 uppercase">Concluir pedido</button>
  </div>

</div>
   {/* Pedidos. */}
   


      </div>
    

}
export default PizzaList