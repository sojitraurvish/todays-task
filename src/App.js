
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Products from './screens/Products';
import Product from './screens/Product';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
