import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/App.css';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';
import { ProductType, ProductWithId } from './types';

function App() {
  const [showList, setShowList] = useState(false);
  const [products, setProducts] = useState<ProductWithId[]>([]);

  const handleSubmit = (productInfo: ProductType) => {
    const id = uuidv4();
    setProducts([...products, { ...productInfo, id }]);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="app">
      <header>
        <button onClick={ () => setShowList(false) }>Cadastrar</button>
        <button onClick={ () => setShowList(true) }>Ver produtos</button>
      </header>
      { !showList && <RegisterProduct handleSubmit={ handleSubmit } />}
      { showList && <ListProducts products={ products } handleDelete={ handleDelete } />}
    </div>
  );
}

export default App;
