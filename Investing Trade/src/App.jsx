import { Routes, Route } from 'react-router-dom';
import Login from './Start/Login.jsx'
import Password from './Start/Password.jsx'
import SignUp from './Start/SignUp.jsx'
function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </div>
  )
}
export default App