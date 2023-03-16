import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/';

import Homepage from './pages/Homepage';
import Soulutions from './pages/Solutions';
import Conversor from './pages/Conversor'
import Ata from './pages/Ata'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/calculator/solutions' element={<Soulutions/>} />
      <Route path='/calculator/conversor' element={<Conversor/>} />
      <Route path='/user/ata' element={<Ata/>} />
      <Route path='/user/login' element={<Login/>} />
      <Route path='/user/register' element={<Register/>} />
      <Route path='/user/reset-password' element={<ResetPassword/>} />
      <Route path='/user/forgot-password' element={<ForgotPassword/>} />
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
