import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import {Navigate, Route,Routes} from 'react-router-dom'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Cart from './Components/Cart'
import WishList from './Components/WishList'

function App() {
 

  return (
    <>
      <Header/>
     <Routes>
      <Route path={'/'} element={<Home/>}/> 
      <Route path={'*'} element={<Navigate to={'/'}/>}/> 
      <Route path={'/Login'} element={<Login/>}/>  
      <Route path={'/SignUp'} element={<SignUp/>}/>  
      <Route path={'/Cart'} element={<Cart/>}/>  
      <Route path={'/WishList'} element={<WishList/>}/>  
     </Routes>
     <Footer/>

    </>
  )
}

export default App
