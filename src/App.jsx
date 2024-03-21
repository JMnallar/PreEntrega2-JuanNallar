import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/HomeComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';
import ContactComponent from './components/ContactComponent/ContactComponent';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import CartwidgetComponent from './components/CartwidgetComponent/CartwidgetComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import ItemDetailContainerComponent from './components/ItemDetailContainerComponent/ItemDetailContainerComponent';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarComponent/>
        <Routes>
          <Route exact path="/" element={<HomeComponent/>} />
          <Route exact path="/products" element={<ItemListContainerComponent/>} />
          <Route exact path="/product/:prodId" element={<ItemDetailContainerComponent />} />
          <Route exact path="/contact" element={<ContactComponent />}/>
          <Route exact path="/cart" element ={<CartwidgetComponent/>}/>
          <Route exact path="/categoria/:categoria" element ={<ItemListContainerComponent/>}/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  );
}

export default App;