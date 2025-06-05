import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import MenuPage from './MenuPage'
import OrderPage from './OrderPage'



function RouteHandle() {
  return (
<HashRouter>
<Routes>
    <Route path='/' element={<HomePage/>}/> 
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/menu' element={<MenuPage/>}/>
    <Route path='/order' element={<OrderPage/>}/>
</Routes>
</HashRouter>
  )
}

export default RouteHandle