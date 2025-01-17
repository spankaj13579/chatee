import { Route, Routes } from "react-router-dom"
import { Messages } from "./pages/Messages"
import Login from "./section/chat/auth/Login"


function App() {
  return (
    <Routes>
      <Route index={true} element={<Messages />} />
      <Route path='/auth/login' element={<Login />} />
    </Routes>
  )
}

export default App
