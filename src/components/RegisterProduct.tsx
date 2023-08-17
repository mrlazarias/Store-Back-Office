import React, { useState } from 'react';
import Product from './Product';
import { ProductType } from '../types';
import '../styles/RegisterProduct.css';

/*
  name: "Nome do Produto",
  price: 100,
  description: "Descrição do Produto",
  tags: "tag1, tag2, tag3",
  image: "https://url-da-imagem"
*/

const INITIAL_STATE = {
  name: '',
  price: 0,
  description: '',
  tags: '',
  image: '',
};

type Props = {
  handleSubmit: (productInfo: ProductType) => void;
};

export default function RegisterProduct(props: Props) {
  const { handleSubmit } = props;
  const [productInfo, setProductInfo] = useState<ProductType>(INITIAL_STATE);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(productInfo);
    setProductInfo(INITIAL_STATE);
  };

  const handleChange = (
    event: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setProductInfo({
      ...productInfo,
      [name]: (name === 'price') ? Number(value) : value,
    });
  };

  const { name, description, price, image, tags } = productInfo;

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ onSubmit }>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              id="name"
              name="name"
              required
              value={ name }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              name="description"
              required
              value={ description }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="price">
            Preço
            <input
              type="number"
              id="price"
              name="price"
              required
              value={ price }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              id="image"
              name="image"
              value={ image }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="tags">
            Tags
            <input
              type="text"
              id="tags"
              name="tags"
              value={ tags }
              onChange={ handleChange }
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <Product productInfo={ productInfo } />
      </div>
    </main>
  );
}
