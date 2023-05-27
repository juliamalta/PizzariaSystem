import Ask from "./assets/Pages/Pedidos/Pedidos"
import Header from "./assets/Components/Header/Header"
import Login from "./assets/Pages/Login/Login"
import { useState } from "react"

const App = () => {
  const [user,setUser] = useState()
  const hasUser = Boolean(user)

  return (
  <div className="h-screen">
  
  <Header user={user}/>

  {hasUser && <Ask/>}
  {!hasUser && <Login onSubmit={setUser}/>}
  </div>
  
  )

}
export default App