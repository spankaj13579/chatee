import { Route, Routes } from "react-router-dom"
import { Messages } from "./pages/Messages"
import Login from "./section/chat/auth/Login"
import Signup from "./section/chat/auth/Signup"


function App() {
  return (
    <Routes>
      <Route index={true} element={<Messages />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/signup' element={<Signup />} />
    </Routes>
  )
}

export default App
