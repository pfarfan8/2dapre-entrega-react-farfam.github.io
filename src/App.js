
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-reouter-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/itemListConteiner/itemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<ItemListConteiner/>}/>
        <Route path='/category/:categoryId' element= {<ItemListConteiner/>}/>
        <Route path='/item/itemId' element = {<ItemDetailConteiner/>}/>
        <Route path='*' element = {<h1>404 Not Found</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
